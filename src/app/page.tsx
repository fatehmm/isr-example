import Link from 'next/link';
import { Suspense } from 'react';

export default async function Home() {
  const data = await fetch(
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000/api/get-posts'
      : 'https://' + process.env.VERCEL_URL + '/api/get-posts',
    {
      cache: 'force-cache',
      next: {
        tags: ['posts'],
      },
    }
  );
  const response = await data.json();
  const posts = response.data || response || [];

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6'>
      <div className='max-w-4xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Blog Posts</h1>
          <p className='text-lg text-gray-600'>Discover and manage your content</p>
        </div>

        {/* Posts Section */}
        <Suspense
          fallback={
            <div className='flex justify-center items-center py-12'>
              <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
            </div>
          }
        >
          {posts.length > 0 ? (
            <div className='grid gap-6 mb-12'>
              {posts.map((post: { id: string; title: string; description: string }) => (
                <div
                  key={post.id}
                  className='bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100'
                >
                  <h2 className='text-2xl font-semibold text-gray-900 mb-3'>{post.title}</h2>
                  <p className='text-gray-600 leading-relaxed'>{post.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className='text-center py-12'>
              <div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
                <div className='text-gray-400 mb-4'>
                  <svg className='mx-auto h-16 w-16' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={1}
                      d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
                    />
                  </svg>
                </div>
                <h3 className='text-lg font-medium text-gray-900 mb-2'>No posts yet</h3>
                <p className='text-gray-500'>Get started by creating your first post!</p>
              </div>
            </div>
          )}
        </Suspense>

        {/* Action Buttons */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
          <Link
            href='/add-post'
            className='inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-lg hover:shadow-xl'
          >
            <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 4v16m8-8H4' />
            </svg>
            Add New Post
          </Link>
        </div>
      </div>
    </div>
  );
}
