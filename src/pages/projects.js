import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project from "../../public/images/projects/agency-website-cover-image.jpg"
import freeflow from "../../public/images/projects/freeflow.jpg"
import gifylapse from "../../public/images/projects/gifylapse.jpg"
import mobilebazar from "../../public/images/projects/mobilebazar.jpg"
import { motion } from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);
const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='relative w-full flex lg:flex-col lg::p-8 xs:rounded-2xl xs:rounded-br-3xl items-center p-12 rounded-3xl justify-between border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl dark:shadow-none'>
            <div className='absolute top-0 -right-3 -z-10 h-[103%] w-full rounded-[2rem] bg-dark dark:bg-light sm:-right-2 sm:h-[102%] sm:rounded-[1.5rem]' />
            <Link href={link} target="_blank" className='w-1/2 lg:w-full rounded-lg overflow-hidden cursor-pointer'>
                <FramerImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src={img} alt={title} className="w-full h-auto"
                    priority
                    sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw'
                />
            </Link>
            <div className='w-1/2 lg:w-full lg:pl-0 lg:pt-6 flex flex-col items-start justify-between pl-6'>
                <span className='text-primary font-light text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-lg'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='flex mt-2 items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon className="!w-10 dark:text-light" /></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark font-semibold p-2 px-6 text-lg sm:px-4 sm:text-base'>Live Demo</Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='flex flex-col w-full h-[450px] items-center justify-center rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4'>
            <Link href={link} target="_blank" className='w-full rounded-lg overflow-hidden cursor-pointer'>
                <FramerImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} src={img} alt={title} className="w-full h-auto"
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-2xl font-bold dark:text-light lg:text-xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='w-full flex mt-2 items-center justify-between'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline underline-offset-2 dark:text-light md:text-base'>Live Demo</Link>
                    <Link href={github} target="_blank" className='w-10 md:w-8'><GithubIcon className="!w-10 md:!w-8 dark:text-light" /></Link>

                </div>
            </div>
        </article>
    )
}

function projects() {
    return (
        <>
            <Head>
                <title>Portfolio | Projects </title>
                <meta name='description' content="full stack developer portfolio" />
            </Head>
            <TransitionEffect/>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="My Journey Through My Projects!" className='mb-16 sm:!text-5xl sm:mb-8 xs:!text-4xl' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Freeflow AI"
                                img={freeflow}
                                summary="FreeFlow is an LLM-based no-code web app builder that takes prompts from a user, generates code, and builds the app in real-time. The goal of FreeFlow is to allow the user to create a web app, start to finish, using AI prompts in an online IDE. The value proposition of FreeFlow is its structured prompting system, which maintains prompt quality, brings consistency to code written, and tests the code automatically."
                                link="/"
                                github="/"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="GifyLapse"
                                img={gifylapse}
                                summary="GifyLapse allows you to create personalized Gifs. For people who actually matter. "
                                link="https://ramisha-anwer.github.io/gifylapse/"
                                github="https://github.com/ramisha-anwer/gifylapse"
                                type="CSS, HTML, Javascript"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Mobile Bazaar"
                                img={mobilebazar}
                                summary=" Mobile Prices app that helps the Users to choose a phone. one can see What the phone features, check prices of mobile phones, compare it against other phones and get user opinions, read gadget reviews and watch latest tech video reviews."
                                link="https://ramisha-anwer.github.io/"
                                github="https://github.com/ramisha-anwer/mobile-bazaar"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-12'>
                            {/* <FeaturedProject
                                title="Freeflow AI"
                                img={project}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                           local currency."
                                link="/"
                                github="/"
                                type="Featured Project"
                            /> */}
                        </div>
                        {/* <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Freeflow AI"
                                img={project}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                           local currency."
                                link="/"
                                github="/"
                                type="Featured Project"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Freeflow AI"
                                img={project}
                                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                           It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                           local currency."
                                link="/"
                                github="/"
                                type="Featured Project"
                            />
                        </div> */}
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects