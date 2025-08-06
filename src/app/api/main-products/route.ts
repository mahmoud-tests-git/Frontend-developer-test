import fs from 'fs';
import path from 'path';
export async function GET(request: Request) {
  const data = fs.readFileSync(
    path.join(process.cwd(), 'public/mock/main-products.json'),
    'utf8',
  );

  if (!data) {
    return new Response(JSON.stringify({ error: 'No data found' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  return new Response(data, {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
