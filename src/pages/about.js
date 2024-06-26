import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import TransitionEffect from '@/components/TransitionEffect'
import { spring, useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import {React,useEffect,useRef} from 'react'
import aboutPic from "../../public/images/profile/about.jpg"

const AnimatedNumbers = ({ value }) => {

    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref,{once:true});

    useEffect(() => {
        if (isInView) {
            motionValue.set(value)
        }
    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)
            }
        })
    }, [springValue, value])

    return (
        <span ref={ref}></span>
    )
}

function about() {
    return (
        <>
            <Head>
                <title>Portfolio | About </title>
                <meta name='description' content="full stack developer portfolio" />
            </Head>
            <TransitionEffect/>
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text={"A little background!"} className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-cold text-dark/75 uppercase dark:text-light/75'>About me</h2>

                            <p className='font-medium'>
                                Hi, I&apos;m Ramisha, a full stack web developer (front-end heavy) and  with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 3 years of experience in the field. I am always looking for
                                new and innovative ways to bring my clients visions to life.
                            </p>
                            <p className='font-medium my-4'>I believe that design is about more than just making things look pretty, it&apos;s about solving problems and
                                creating intuitive, enjoyable experiences for users. </p>

                            <p className='font-medium'>Whether I&apos;m working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                            </p>
                        </div>
                        <div className='col-span-3 xl:col-span-4 relative h-max md:hidden  rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark dark:border-light p-8'>
                            <div className='absolute top-0 -right-3 -z-40 h-[103%] w-[102%] rounded-[2rem] bg-dark dark:bg-light' />
                            <Image src={aboutPic} />
                        </div>
                        <div className='col-span-2 xl:col-span-8 flex-col flex xl:flex-row items-end justify-between'>
                            <div className='flex flex-col justify-center items-end xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Satisfied Clients</h2>
                            </div>
                            <div className='flex flex-col justify-center items-end xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={20}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>Projects</h2>
                            </div>
                            <div className='flex flex-col justify-center items-end xl:items-center'>
                                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                  <AnimatedNumbers value={2}/>+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                            </div>
                        </div>
                    </div>
                    <Skills/>
                    <Experience/>
                    <Education/>
                </Layout>

            </main>
        </>
    )
}

export default about