import Image from 'next/image'
import React from 'react'
import AWS from "../../public/images/skills/aws.png"
import CSS from "../../public/images/skills/css.png"
import githubDark from "../../public/images/skills/github3.png"
import HTML from "../../public/images/skills/html.png"
import JS from "../../public/images/skills/javascript.png"
import mongo from "../../public/images/skills/mongo.png"
import sql from "../../public/images/skills/mysql.png"
import nextjs from "../../public/images/skills/nextjs.png"
import Node from "../../public/images/skills/node.png"
import postgres from "../../public/images/skills/postgres.png"
import REACT from "../../public/images/skills/react.png"
import TAILWIND from "../../public/images/skills/tailwind.png"
import useThemeSwitcher from './hooks/useThemeSwitcher'

function Skills() {
    const [mode,setMode]=useThemeSwitcher();
  return (
      <>
       <h2 className='font-bold text-6xl mt-44 mb-10 w-full text-center md:mb-16 xs:text-4xl'>Tech Stack</h2>
      <div className='w-full grid sm:grid-cols-2 md:grid-cols-3 grid-cols-4 gap-8 text-center py-8'>
          <div className='flex flex-col items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-700 hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[4rem]' src={HTML}/>
              <p className='mt-4'>HTML</p>
          </div>
          <div className='flex flex-col items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-700  hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[4rem]' src={CSS}/>
              <p className='mt-4'>CSS</p>
          </div>
          <div className='flex flex-col items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-700 hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[4rem]' src={JS}/>
              <p className='mt-4'>Javascript</p>
          </div>
          <div className='flex flex-col items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-700 hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[4rem]' src={REACT}/>
              <p className='mt-4'>React</p>
          </div>
          <div className='flex flex-col items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-700 hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[4rem]' src={Node}/>
              <p className='mt-4'>Node</p>
          </div>
          <div className='flex flex-col items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-700 hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[4rem]' src={mongo}/>
              <p className='mt-4'>Mongo DB</p>
          </div>
          <div className='flex flex-col items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-700 hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[4rem] ' src={nextjs}/>
              <p className='mt-4'>Next js</p>
          </div>
          <div className='flex flex-col items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-700 hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[4rem]' src={TAILWIND}/>
              <p className='mt-4'>Tailwind CSS</p>
          </div>
          <div className='flex flex-col items-center justify-around shadow-lg shadow-gray-200 dark:shadow-gray-700 hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[6rem] ' src={AWS}/>
              <p className='mt-4'>AWS</p>
          </div>
          <div className='flex flex-col items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-700 hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[4rem] ' src={postgres}/>
              <p className='mt-4'>PostgreSQL</p>
          </div>
          <div className='flex flex-col items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-700 hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[4rem] ' src={sql}/>
              <p className='mt-4'>MySQL</p>
          </div>
          <div className='flex flex-col items-center justify-center shadow-lg shadow-gray-200 dark:shadow-gray-700 hover:scale-110 duration-500 py-4 rounded-md border-2 border-solid border-black dark:border-light'>
              <Image className='w-[4rem] ' src={ githubDark}/>
              <p className='mt-4'>Github</p>
          </div>
         
      </div>
      </>
   
  )
}

export default Skills