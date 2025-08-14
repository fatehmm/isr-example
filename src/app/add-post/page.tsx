import { addPost } from '@/server/actions/post';
import Link from 'next/link';

export default function AddPost() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6'>
      <div className='max-w-2xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-gray-900 mb-4'>Create New Post</h1>
          <p className='text-lg text-gray-600'>Share your thoughts with the world</p>
        </div>

        {/* Form */}
        <div className='bg-white rounded-xl shadow-lg p-8 border border-gray-100'>
          <form action={addPost} className='space-y-6'>
            <div>
              <label htmlFor='title' className='block text-sm font-medium text-gray-700 mb-2'>
                Post Title
              </label>
              <input
                type='text'
                name='title'
                id='title'
                required
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900 placeholder-gray-400'
                placeholder='Enter your post title...'
              />
            </div>

            <div>
              <label htmlFor='content' className='block text-sm font-medium text-gray-700 mb-2'>
                Post Content
              </label>
              <textarea
                name='content'
                id='content'
                required
                rows={6}
                className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 text-gray-900 placeholder-gray-400 resize-vertical'
                placeholder='Write your post content here...'
              />
            </div>

            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <button
                type='submit'
                className='flex-1 inline-flex justify-center items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 shadow-lg hover:shadow-xl'
              >
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
                  />
                </svg>
                Publish Post
              </button>

              <Link
                href='/'
                className='flex-1 inline-flex justify-center items-center px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 border border-gray-300'
              >
                <svg className='w-5 h-5 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
                </svg>
                Cancel
              </Link>
            </div>
          </form>
        </div>

        {/* Back Link */}
        <div className='text-center mt-6'>
          <Link
            href='/'
            className='inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200'
          >
            <svg className='w-4 h-4 mr-1' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M10 19l-7-7m0 0l7-7m-7 7h18' />
            </svg>
            Back to Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
