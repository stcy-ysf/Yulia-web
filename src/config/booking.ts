// Paste the iframe src from Julia's Google Calendar > Booking page > Website embed.
// Use Julia's own schedule URL. Do not use the temporary test schedule from this laptop.
export const GOOGLE_BOOKING_EMBED_URL =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2PlgINhQhoF0qYqCOQw6NrDplZyqWhAsYCiynojD6SGTU39WLXZOXIzpwGG1aKU3Frf3AhKgXo?gv=true';

export const getGoogleBookingEmbedUrl = (): string | null => {
  if (!GOOGLE_BOOKING_EMBED_URL.trim()) return null;

  try {
    const url = new URL(GOOGLE_BOOKING_EMBED_URL);
    const isGoogleCalendarEmbed =
      url.hostname === 'calendar.google.com' &&
      url.pathname.includes('/appointments/schedules/');

    return url.protocol === 'https:' && isGoogleCalendarEmbed ? url.toString() : null;
  } catch {
    return null;
  }
};
