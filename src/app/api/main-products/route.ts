import fs from 'fs';
import path from 'path';
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public/mock/main-products.json');

    const fileIsHere = fs.existsSync(filePath);

    if (!fileIsHere) {
      return new Response(JSON.stringify({ error: 'File not found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const data = fs.readFileSync(filePath, 'utf8');

    return new Response(data, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
    });
  }
}
