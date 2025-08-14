import { revalidateTag } from 'next/cache';
import { NextResponse } from 'next/server';

export async function GET() {
  revalidateTag('posts');
  return NextResponse.json({ message: 'Posts revalidated' });
}
