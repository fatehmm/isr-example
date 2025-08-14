import { sql } from '@/server/db';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const data = await sql`SELECT * FROM posts`;
  return NextResponse.json({ data });
}
