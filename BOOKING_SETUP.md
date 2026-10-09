# Appointment request setup

The original booking form now posts to `/api/appointments`. The server validates the request and forwards it to a private Power Automate URL. The flow appends one row to the Excel table, emails Yuliya a link to that workbook, and returns success to the site. The customer sees a pending request; the selected date and time are not confirmed until the office replies.

## 1. Put the workbook in Microsoft 365

1. Upload `docs/Appointment-Register-Template.xlsx` to the OneDrive for Business or SharePoint account that will own the appointment file.
2. Open it in Excel for the web and confirm the `Appointments` sheet contains the `AppointmentsTable` table. Keep the column names as they are; the flow maps to them by name.
3. Copy the workbook's normal organization-only URL. Do not create an anonymous/public share link. The notification goes to the workbook owner, who should already have access.

The single sheet has counts for today, tomorrow, this week, this month, and this year. All requests remain together in a filterable table; filter `Requested Date (yyyy-mm-dd)` to inspect a particular day or date range. Update `Status` as requests are handled. Cancelled rows stay in the history and are excluded from the dashboard counts.

## 2. Create the Power Automate flow

Create an automated cloud flow with **When an HTTP request is received** as its trigger. Use the trigger's generated HTTPS URL only on the Vercel server; it contains a secret and must never be added to browser code, committed files, or a public document. If your tenant offers authenticated request-trigger settings, restrict access to the flow rather than making it broadly callable.

Use this request schema:

```json
{
  "type": "object",
  "properties": {
    "requestId": { "type": "string" },
    "receivedAt": { "type": "string" },
    "timezone": { "type": "string" },
    "name": { "type": "string" },
    "email": { "type": "string" },
    "phone": { "type": "string" },
    "serviceId": { "type": "string" },
    "service": { "type": "string" },
    "mode": { "type": "string" },
    "preferredDate": { "type": "string" },
    "preferredTime": { "type": "string" },
    "message": { "type": "string" }
  },
  "required": ["requestId", "receivedAt", "timezone", "name", "email", "phone", "serviceId", "service", "mode", "preferredDate", "preferredTime", "message"]
}
```

Then add these actions, in this order:

1. **List rows present in a table** — select the workbook and `AppointmentsTable`. Set Filter Query to the expression `concat('RequestID eq ''', triggerBody()?['requestId'], '''')`.
2. **Condition** — check whether `length(body('List_rows_present_in_a_table')?['value'])` equals `0`.
3. In the **Yes** branch, use the current Excel Online (Business) action **Add a row into a table** and map columns:
   - `RequestID` → `requestId`
   - `Received (Lisbon)` → `formatDateTime(convertTimeZone(triggerBody()?['receivedAt'],'UTC','GMT Standard Time'),'yyyy-MM-dd HH:mm')`
   - `Requested Date (yyyy-mm-dd)` → `preferredDate`
   - `Weekday` → `formatDateTime(triggerBody()?['preferredDate'],'dddd')`
   - `Requested Time` → `preferredTime`
   - `Client Name` → `name`; `Email` → `email`; `Phone` → `phone`
   - `Service` → `service`
   - `Format` → `mode` (or map `online` to “Online video call” and `presencial` to “In-person (Faro)”)
   - `Client Note` → `message`
   - `Status` → the literal `Requested`
4. After the condition, add **Send an email (V2)**. Address it to Yuliya's verified notification email. Include the requested date/time, name, service, format, and the organization-only workbook URL copied in step 1. State clearly that this is a new request awaiting confirmation. Keep the email concise; the workbook contains the complete row.
5. Add a **Response** action after the email with status `200`, content type `application/json`, and body:

   ```json
   { "success": true }
   ```

The request ID is stable across a browser retry. The list-and-condition step prevents that retry from adding a second row. Turn on trigger concurrency control and set its degree to `1`; Microsoft warns against concurrent writes to a single Excel file. The flow sends the email on a retry too, so a previously saved request can still be brought to Yuliya's attention.

## 3. Connect the site to the flow

In the Vercel project connected to the original website, add the generated trigger URL as the server-side environment variable `APPOINTMENTS_FLOW_URL` for Preview and Production, then redeploy. Do not use a `VITE_` prefix: Vite exposes those values to the public browser bundle. `APPOINTMENTS_FLOW_URL` must remain a server-only secret.

The project needs the Vercel `/api/appointments` function deployed beside the Vite static site. The booking API intentionally returns an error if the flow is not configured or does not confirm success; it will not show a false “submitted” message.

## Before accepting real bookings

- Confirm the business OneDrive/SharePoint file and the notification recipient belong to Yuliya and that only intended staff have access.
- Confirm the HTTP trigger and Excel/Outlook actions are allowed under the Microsoft 365 / Power Automate plan and organization policy. The Excel Online (Business) connector works with OneDrive for Business, SharePoint, and Microsoft 365 group files.
- Run a test using clearly fictional data; verify one row is added, the email arrives with a working workbook link, and the requested date appears in the correct dashboard periods. Remove the test row afterwards.
- Confirm the time slots in the website match Yuliya's actual availability. This workflow records a request; it does not read her calendar or prevent a conflict.
- Verify the live site's phone number, WhatsApp number, and notification email before launch.
