import { NextRequest, NextResponse } from 'next/server';
import { SNOWTRACE_API, ROUTESCAN_API } from '@/lib/constants';
import { isRateLimited } from '@/lib/rate-limit';

interface ServiceStatus {
  ok: boolean;
  latencyMs: number;
}

async function checkService(url: string, timeoutMs = 5000): Promise<ServiceStatus> {
  const start = Date.now();
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);
    return { ok: res.ok, latencyMs: Date.now() - start };
  } catch {
    return { ok: false, latencyMs: Date.now() - start };
  }
}

export async function GET(request: NextRequest) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (isRateLimited(ip)) {
    return NextResponse.json({ status: 'rate_limited' }, { status: 429 });
  }

  const [snowtrace, routescan] = await Promise.all([
    checkService(`${SNOWTRACE_API}?module=stats&action=ping`),
    checkService(`${ROUTESCAN_API}?module=stats&action=ping`),
  ]);

  const allOk = snowtrace.ok && routescan.ok;
  const anyOk = snowtrace.ok || routescan.ok;

  const status: 'online' | 'degraded' | 'offline' = allOk ? 'online' : anyOk ? 'degraded' : 'offline';

  return NextResponse.json({
    status,
    services: {
      snowtrace: { ok: snowtrace.ok, latencyMs: snowtrace.latencyMs },
      routescan: { ok: routescan.ok, latencyMs: routescan.latencyMs },
    },
    timestamp: Date.now(),
  });
}
