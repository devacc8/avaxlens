const MAX_REQUESTS = 30;
const WINDOW_MS = 60_000; // 1 minute

const hits = new Map<string, number[]>();

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, timestamps] of hits) {
    const valid = timestamps.filter(t => now - t < WINDOW_MS);
    if (valid.length === 0) {
      hits.delete(key);
    } else {
      hits.set(key, valid);
    }
  }
}, 5 * 60_000);

export function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = hits.get(ip) || [];
  const valid = timestamps.filter(t => now - t < WINDOW_MS);
  valid.push(now);
  hits.set(ip, valid);
  return valid.length > MAX_REQUESTS;
}
