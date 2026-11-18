const CONFIG = Object.freeze({
  spreadsheetId: '1BR74aG1Qwx6cfPnYnEXNGPG-Mw-nCq7pBRkG5d41gAE',
  sheetName: 'Website Leads',
  notificationEmail: 'sales@axonvortex.com',
  timezone: 'Asia/Kolkata',
  maxFieldLength: 5000
});

const HEADERS = Object.freeze([
  'Received At',
  'Submission ID',
  'Form Source',
  'Page URL',
  'Name',
  'Business Name',
  'Email',
  'Phone',
  'Website',
  'Selected Areas',
  'Audit Type',
  'Goal',
  'Bottleneck / Message',
  'Flagged Items',
  'Referrer',
  'Status',
  'Email Notification',
  'User Agent'
]);

const ALLOWED_FORM_SOURCES = Object.freeze([
  'contact-page',
  'growth-audit-page',
  'growth-audit-modal'
]);

function doGet() {
  return jsonResponse({ ok: true, service: 'AxonVortex lead intake' });
}

function doPost(event) {
  const lock = LockService.getScriptLock();

  try {
    const payload = parsePayload(event);

    // Bots commonly fill this hidden field. Return a neutral success response.
    if (cleanText(payload.companyWebsite)) {
      return jsonResponse({ ok: true });
    }

    validatePayload(payload);

    const cache = CacheService.getScriptCache();
    const cacheKey = `submission:${cleanText(payload.submissionId)}`;
    if (cache.get(cacheKey)) {
      return jsonResponse({ ok: true, duplicate: true });
    }

    lock.waitLock(10000);

    const spreadsheet = SpreadsheetApp.openById(CONFIG.spreadsheetId);
    const sheet = spreadsheet.getSheetByName(CONFIG.sheetName);
    if (!sheet) throw new Error(`Missing sheet: ${CONFIG.sheetName}`);

    const receivedAt = new Date();
    const row = buildRow(payload, receivedAt);
    sheet.appendRow(row);

    const rowNumber = sheet.getLastRow();
    sheet.getRange(rowNumber, 1).setNumberFormat('yyyy-mm-dd hh:mm:ss');
    SpreadsheetApp.flush();

    let emailStatus = 'Sent';
    try {
      sendLeadEmail(payload, receivedAt);
    } catch (emailError) {
      console.error('Lead email failed', emailError);
      emailStatus = `Failed: ${cleanText(emailError.message).slice(0, 160)}`;
    }

    sheet.getRange(rowNumber, 17).setValue(emailStatus);
    cache.put(cacheKey, '1', 21600);

    return jsonResponse({
      ok: true,
      submissionId: cleanText(payload.submissionId),
      emailStatus
    });
  } catch (error) {
    console.error('Lead submission failed', error);
    return jsonResponse({ ok: false, error: cleanText(error.message) });
  } finally {
    try {
      lock.releaseLock();
    } catch (error) {
      // The lock was never acquired, so there is nothing to release.
    }
  }
}

function parsePayload(event) {
  const body = event && event.postData && event.postData.contents;
  if (!body) throw new Error('Empty request body');

  let payload;
  try {
    payload = JSON.parse(body);
  } catch (error) {
    throw new Error('Invalid JSON payload');
  }

  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new Error('Invalid request payload');
  }

  return payload;
}

function validatePayload(payload) {
  const source = cleanText(payload.formSource);
  const name = cleanText(payload.name);
  const email = cleanText(payload.email).toLowerCase();

  if (!ALLOWED_FORM_SOURCES.includes(source)) {
    throw new Error('Unsupported form source');
  }
  if (!name) throw new Error('Name is required');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new Error('A valid email is required');
  }

  Object.keys(payload).forEach((key) => {
    const value = Array.isArray(payload[key])
      ? payload[key].join(', ')
      : payload[key];
    if (cleanText(value).length > CONFIG.maxFieldLength) {
      throw new Error(`Field is too long: ${key}`);
    }
  });
}

function buildRow(payload, receivedAt) {
  return [
    receivedAt,
    sheetSafe(payload.submissionId),
    sheetSafe(payload.formSource),
    sheetSafe(payload.pageUrl),
    sheetSafe(payload.name),
    sheetSafe(payload.businessName),
    sheetSafe(payload.email),
    sheetSafe(payload.phone),
    sheetSafe(payload.website),
    sheetSafe(joinList(payload.selectedAreas)),
    sheetSafe(payload.auditType),
    sheetSafe(payload.goal),
    sheetSafe(payload.bottleneck || payload.message),
    sheetSafe(joinList(payload.flaggedItems)),
    sheetSafe(payload.referrer),
    'New',
    'Pending',
    sheetSafe(payload.userAgent)
  ];
}

function sendLeadEmail(payload, receivedAt) {
  const source = cleanText(payload.formSource);
  const name = cleanText(payload.name);
  const email = cleanText(payload.email).toLowerCase();
  const business = cleanText(payload.businessName);
  const received = Utilities.formatDate(
    receivedAt,
    CONFIG.timezone,
    'yyyy-MM-dd HH:mm:ss z'
  );

  const details = [
    ['Received', received],
    ['Form', source],
    ['Name', name],
    ['Business', business],
    ['Email', email],
    ['Phone', cleanText(payload.phone)],
    ['Website', cleanText(payload.website)],
    ['Selected Areas', joinList(payload.selectedAreas)],
    ['Audit Type', cleanText(payload.auditType)],
    ['Goal', cleanText(payload.goal)],
    ['Bottleneck / Message', cleanText(payload.bottleneck || payload.message)],
    ['Flagged Items', joinList(payload.flaggedItems)],
    ['Page', cleanText(payload.pageUrl)],
    ['Submission ID', cleanText(payload.submissionId)]
  ].filter((item) => item[1]);

  const subjectName = business || name;
  const subject = `[AxonVortex Website Lead] ${source} — ${subjectName}`;
  const plainBody = details.map((item) => `${item[0]}: ${item[1]}`).join('\n');
  const rows = details
    .map(
      (item) =>
        `<tr><th style="padding:8px 12px;text-align:left;vertical-align:top;border-bottom:1px solid #e5e7eb;">${htmlEscape(item[0])}</th><td style="padding:8px 12px;border-bottom:1px solid #e5e7eb;white-space:pre-wrap;">${htmlEscape(item[1])}</td></tr>`
    )
    .join('');

  MailApp.sendEmail({
    to: CONFIG.notificationEmail,
    replyTo: email,
    name: 'AxonVortex Website',
    subject,
    body: plainBody,
    htmlBody: `<div style="font-family:Arial,sans-serif;color:#111827;"><h2 style="margin:0 0 16px;">New website enquiry</h2><table style="border-collapse:collapse;width:100%;max-width:760px;">${rows}</table></div>`
  });
}

function cleanText(value) {
  if (value === null || value === undefined) return '';
  return String(value).replace(/\u0000/g, '').trim();
}

function joinList(value) {
  if (Array.isArray(value)) {
    return value.map(cleanText).filter(Boolean).join(', ');
  }
  return cleanText(value);
}

function sheetSafe(value) {
  const text = cleanText(value);
  return /^[=+\-@]/.test(text) ? `'${text}` : text;
}

function htmlEscape(value) {
  return cleanText(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON
  );
}

function testSubmission() {
  const event = {
    postData: {
      contents: JSON.stringify({
        schemaVersion: 1,
        submissionId: Utilities.getUuid(),
        submittedAt: new Date().toISOString(),
        formSource: 'contact-page',
        pageUrl: 'https://axonvortex.com/contact',
        referrer: '',
        userAgent: 'Google Apps Script test',
        name: 'AxonVortex Test Lead',
        businessName: 'Internal Test',
        email: 'sales@axonvortex.com',
        phone: '',
        website: 'https://axonvortex.com',
        selectedAreas: ['Integration test'],
        goal: 'Verify Google Sheet and email delivery',
        bottleneck: 'Delete this test row after verification.',
        companyWebsite: ''
      })
    }
  };

  console.log(doPost(event).getContent());
}
