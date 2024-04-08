import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import article1 from "../../public/images/articles/create loading screen in react js.jpg"
import { motion } from "framer-motion"

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative col-span-1 w-full p-4 bg-light dark:bg-dark border-2 border-solid border-dark dark:border-light rounded-2xl'>

            <div className='absolute top-0 -right-3 -z-10 h-[103%] w-full rounded-[2rem] bg-dark dark:bg-light sm:-right-2 sm:h-[102%] sm:rounded-[1.5rem]' />
            <Link
                href={link}
                target="_blank"
                className='inline-block w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src={img} alt={title} className="w-full h-auto"
                    priority
                    sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw'
                    />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline underline-offset-2 xs:text-lg'>
                    {title}
                </h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <li className='relative w-full p-4 my-6 rounded-xl flex sm:flex-col items-center justify-between bg-light dark:bg-dark text-dark first:mt-0 border border-dark dark:border-light border-solid border-r-4 border-b-4'>
            <Link href={link}>
                <h2 className='capitalixe text-xl sm:text-base font-semibold hover:underline underline-offset-2 dark:text-light'>
                    {title}</h2>
            </Link>
            <span className='text-primary font-light pl-4 sm:pl-0 sm:pt-1 sm:self-start sm:text-sm'>{date}</span>
        </li>
    )
}

function articles() {
    return (
        <>
            <Head>
                <title>Portfolio | Projects </title>
                <meta name='description' content="full stack developer portfolio" />
            </Head>
            <main className='w-full flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Words can change the world!" className='mb-16 sm:!text-5xl sm:mb-8 xs:!text-4xl' />

                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1'>
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            img={article1}
                            link="/"
                        />
                        <FeaturedArticle
                            title="Build A Custom Pagination Component In Reactjs From Scratch"
                            summary="Learn how to build a custom pagination component in ReactJS from scratch. 
                        Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
                            time="9 min read"
                            img={article1}
                            link="/"
                        />

                    </ul>
                    <h2 className='w-full text-center my-16 font-bold text-4xl mt-32'>All Articles</h2>
               <ul>
                   <Article
                   title="Build A Custom Pagination Component In Reactjs From Scratch"
                   date="March 2, 2024"
                   link="/"
                   img={article1}
                   />
                   <Article
                   title="Build A Custom Pagination Component In Reactjs From Scratch"
                   date="March 2, 2024"
                   link="/"
                   img={article1}
                   />
                   <Article
                   title="Build A Custom Pagination Component In Reactjs From Scratch"
                   date="March 2, 2024"
                   link="/"
                   img={article1}
                   />
                   <Article
                   title="Build A Custom Pagination Component In Reactjs From Scratch"
                   date="March 2, 2024"
                   link="/"
                   img={article1}
                   />
               </ul>
               
                </Layout>
            </main>
        </>
    )
}

export default articles