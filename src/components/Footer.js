import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

function Footer() {
  return (
      <footer className='w-full border-t-2 border-solid sm:text-sm md:text-base border-dark font-medium text-lg dark:text-light dark:border-light'>
    <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center justify-center lg:py-2'>
            Built with <span className='text-pink-600 dark:text-primary px-1 text-xl'>&#9825;</span> by &nbsp;<Link target="_blank" href="https://www.linkedin.com/in/ramisha-anwer/" className='underline underline-offset-2'>Ramisha</Link>
        </div>
        
        <Link href="https://www.linkedin.com/in/ramisha-anwer/" target="_blank" className='underline underline-offset-2'>Say hello</Link>
    </Layout>
    </footer>
  )
}

export default Footer