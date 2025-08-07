import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const targetUrl = `${process.env.NEXT_PUBLIC_CALVERO_API_URL}/categories`;
  const apiRes = await fetch(targetUrl, {
    method: req.method,
  });
  const body = await apiRes.json();
  return new Response(JSON.stringify(body));
}
