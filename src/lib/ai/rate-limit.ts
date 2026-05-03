const MAX_REQUESTS = parseInt(process.env.RATE_LIMIT_MAX_REQUESTS ?? "10", 10);
const WINDOW_MS = parseInt(process.env.RATE_LIMIT_WINDOW_MS ?? "60000", 10);

const hits = new Map<string, number[]>();

export function checkRateLimit(ip: string): { allowed: boolean; retryAfterMs: number } {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const timestamps = (hits.get(ip) ?? []).filter((t) => t > windowStart);
  hits.set(ip, timestamps);

  if (timestamps.length >= MAX_REQUESTS) {
    const oldest = timestamps[0]!;
    return { allowed: false, retryAfterMs: oldest + WINDOW_MS - now };
  }

  timestamps.push(now);
  return { allowed: true, retryAfterMs: 0 };
}
