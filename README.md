<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/7af0b868-8026-4df3-8b8e-23257095cfce

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Appointment booking

The contact page embeds Julia's Google Calendar booking page. Configure
`GOOGLE_BOOKING_EMBED_URL` in `src/config/booking.ts` with the `src` value from
Google Calendar's **Booking page → Website embed → Inline booking page** code.
Use Julia's own booking schedule, not the temporary test schedule from another
Google account. Google Calendar handles availability, customer confirmation,
owner notification, and the calendar event.
