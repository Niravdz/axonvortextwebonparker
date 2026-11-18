# AxonVortex website lead integration

This Google Apps Script receives all three website form types, appends each valid submission to the `Website Leads` tab, and emails `sales@axonvortex.com`.

## Production deployment

The production web app is deployed as **Execute as: Me** and **Who has access: Anyone**:

`https://script.google.com/macros/s/AKfycbxrPWQGsGUA9MlZfrcP-Qu6OCjT7D414BrkPN7471_CGf1gVMaTPIT-uCWB_Adb-GOyQg/exec`

The website uses this URL as a safe default and allows `VITE_LEAD_WEBHOOK_URL` to override it per environment.

## Deployment procedure

1. Open the `AxonVortex Website Leads` Google Sheet.
2. Open **Extensions → Apps Script**.
3. Replace the editor contents with `Code.gs` from this folder.
4. Save the project as `AxonVortex Website Lead Intake`.
5. In **Project Settings**, set the time zone to **(GMT+05:30) India Standard Time — Kolkata**.
6. Choose **Deploy → New deployment → Web app**.
7. Set **Execute as** to **Me** and **Who has access** to **Anyone**.
8. Authorize Sheets and email access, deploy, and copy the `/exec` web app URL.
9. Add that URL as `VITE_LEAD_WEBHOOK_URL` in the production build environment when an environment-specific override is required.

After deployment, submit one controlled test through each website form and verify the Sheet row plus email notification before accepting public traffic.
