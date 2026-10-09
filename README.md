<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

## Appointment requests

The booking form uses the server-side Vercel function at `/api/appointments`. Configure the private `APPOINTMENTS_FLOW_URL` Vercel environment variable and create the Microsoft 365 Excel + email flow before accepting real bookings. Follow [BOOKING_SETUP.md](./BOOKING_SETUP.md). Without that setup, the API intentionally reports that booking is unavailable rather than pretending it has saved a request.

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/7af0b868-8026-4df3-8b8e-23257095cfce

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
