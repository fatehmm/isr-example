'use server';
import { revalidateTag } from 'next/cache';
import { sql } from '../db';

export async function addPost(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');

  await sql`INSERT INTO posts (title, description) VALUES (${title}, ${content})`;
}

export async function revalidatePosts() {
  revalidateTag('posts');
}
