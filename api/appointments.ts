type BookingBody = {
  requestId?: unknown;
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  serviceId?: unknown;
  service?: unknown;
  mode?: unknown;
  preferredDate?: unknown;
  preferredTime?: unknown;
  message?: unknown;
  companyWebsite?: unknown;
};

const allowedTimes = new Set(['10:00', '11:30', '14:30', '16:00', '17:30']);
const allowedModes = new Set(['presencial', 'online']);
const maxMessageLength = 1000;

function asText(value: unknown, maxLength: number): string | null {
  if (typeof value !== 'string') return null;
  const normalized = value.trim();
  return normalized.length > 0 && normalized.length <= maxLength ? normalized : null;
}

function isFutureOrTodayInLisbon(date: string, time: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const [year, month, day] = date.split('-').map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  if (parsed.getUTCFullYear() !== year || parsed.getUTCMonth() !== month - 1 || parsed.getUTCDate() !== day) return false;
  const todayLisbon = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Lisbon', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(new Date());
  if (date > todayLisbon) return true;
  if (date < todayLisbon) return false;
  const timeLisbon = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Lisbon', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).format(new Date());
  return time > timeLisbon;
}

export default async function handler(req: any, res: any) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ success: false, error: 'method_not_allowed' });
  }

  const contentLength = Number(req.headers?.['content-length'] || 0);
  if (contentLength > 12_000) {
    return res.status(413).json({ success: false, error: 'request_too_large' });
  }

  const body = (req.body ?? {}) as BookingBody;
  // Quietly accept honeypot submissions without forwarding spam to the workbook.
  if (typeof body.companyWebsite === 'string' && body.companyWebsite.trim()) {
    return res.status(200).json({ success: true });
  }

  const requestId = asText(body.requestId, 64);
  const name = asText(body.name, 120);
  const email = asText(body.email, 254);
  const phone = asText(body.phone, 40);
  const serviceId = asText(body.serviceId, 100);
  const service = asText(body.service, 160);
  const mode = asText(body.mode, 20);
  const preferredDate = asText(body.preferredDate, 10);
  const preferredTime = asText(body.preferredTime, 5);
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, maxMessageLength) : '';

  if (!requestId || !/^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(requestId) ||
      !name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !phone || !serviceId || !service ||
      !mode || !allowedModes.has(mode) || !preferredDate || !preferredTime || !allowedTimes.has(preferredTime) ||
      !isFutureOrTodayInLisbon(preferredDate, preferredTime)) {
    return res.status(400).json({ success: false, error: 'invalid_booking' });
  }

  const flowUrl = process.env.APPOINTMENTS_FLOW_URL;
  if (!flowUrl) {
    return res.status(503).json({ success: false, error: 'booking_unavailable' });
  }

  let destination: URL;
  try {
    destination = new URL(flowUrl);
  } catch {
    return res.status(503).json({ success: false, error: 'booking_unavailable' });
  }
  if (destination.protocol !== 'https:') {
    return res.status(503).json({ success: false, error: 'booking_unavailable' });
  }

  const receivedAt = new Date().toISOString();
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 24_000);

  try {
    const flowResponse = await fetch(destination, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      signal: controller.signal,
      body: JSON.stringify({
        requestId,
        receivedAt,
        timezone: 'Europe/Lisbon',
        name,
        email,
        phone,
        serviceId,
        service,
        mode,
        preferredDate,
        preferredTime,
        message,
      }),
    });

    if (!flowResponse.ok) {
      return res.status(502).json({ success: false, error: 'booking_unavailable' });
    }

    const confirmation = await flowResponse.json().catch(() => null);
    if (!confirmation || confirmation.success !== true) {
      return res.status(502).json({ success: false, error: 'booking_unavailable' });
    }

    return res.status(200).json({ success: true, status: 'requested', requestId });
  } catch {
    return res.status(502).json({ success: false, error: 'booking_unavailable' });
  } finally {
    clearTimeout(timeout);
  }
}

export const config = { maxDuration: 30 };
