import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>NextJS Boilerplate</title>
        <meta
          name='description'
          content='NextJS Boilerplate integrated with TailwindCSS & DaisyUI'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='navbar bg-teal-500 text-white'>
        <div className='flex-1'>
          <a className='normal-case text-xl'>NextJS Boilerplate</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal p-0'>
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex='0'>
              <a>
                Parent
                <svg
                  className='fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                >
                  <path d='M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z' />
                </svg>
              </a>
              <ul className='p-2 bg-teal-500'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
      </div>
      <div className='hero min-h-screen bg-base-200'>
        <div className='hero-content text-center'>
          <div className='max-w-md'>
            <h1 className='text-5xl font-bold'>Welcome!</h1>
            <p className='py-6'>
              A great Nextjs starter that comes with TailwindCSS & DaisyUI ready
              to go!
            </p>
            <button className='btn btn-primary mr-4'>TailwindCSS</button>
            <button className='btn btn-primary'>DaisyUI</button>
          </div>
        </div>
      </div>
    </div>
  )
}
