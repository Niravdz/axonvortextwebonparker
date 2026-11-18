const DEFAULT_LEAD_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbxrPWQGsGUA9MlZfrcP-Qu6OCjT7D414BrkPN7471_CGf1gVMaTPIT-uCWB_Adb-GOyQg/exec';

const LEAD_WEBHOOK_URL =
  import.meta.env.VITE_LEAD_WEBHOOK_URL?.trim() || DEFAULT_LEAD_WEBHOOK_URL;

const REQUEST_TIMEOUT_MS = 15000;

function createSubmissionId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  return `lead-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function normalizeValue(value) {
  if (Array.isArray(value)) {
    return value.map((item) => String(item).trim()).filter(Boolean);
  }

  if (value === null || value === undefined) return '';
  return String(value).trim();
}

export async function submitLead({ formSource, fields }) {
  if (!LEAD_WEBHOOK_URL) {
    throw new Error('Lead submission service is not configured yet.');
  }

  const normalizedFields = Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [key, normalizeValue(value)])
  );

  const payload = {
    schemaVersion: 1,
    submissionId: createSubmissionId(),
    submittedAt: new Date().toISOString(),
    formSource,
    pageUrl: window.location.href,
    referrer: document.referrer || '',
    userAgent: navigator.userAgent || '',
    ...normalizedFields
  };

  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    await fetch(LEAD_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'omit',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8'
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
      keepalive: true
    });

    return { submissionId: payload.submissionId };
  } catch (error) {
    if (error?.name === 'AbortError') {
      throw new Error('The request timed out. Please try again.');
    }

    throw new Error('We could not send your request. Please try again.');
  } finally {
    window.clearTimeout(timeoutId);
  }
}
