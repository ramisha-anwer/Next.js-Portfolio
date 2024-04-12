import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import article1 from "../../public/images/articles/aws.png"
import article2 from "../../public/images/articles/webdev.webp"
import { motion } from "framer-motion"
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
    return (
        <li className='relative flex flex-col justify-between col-span-1 w-full h-[550px] p-4 bg-light dark:bg-dark  overflow-scroll border border-dark dark:border-light border-solid border-r-8 border-b-8 rounded-2xl'>

            <div className='absolute top-0 -right-3 -z-10 h-[103%] w-full rounded-[2rem] bg-dark dark:bg-light sm:-right-2 sm:h-[102%] sm:rounded-[1.5rem]' />
            <Link
                href={link}
                target="_blank"
                className='inline-block h-1/2 w-full cursor-pointer overflow-hidden rounded-lg'
            >
                <FramerImage
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    src={img} alt={title} className="w-full h-full"
                    priority
                    sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 50vw'
                />
            </Link>
            <Link href={link} target="_blank">
                <h2 className='capitalize text-2xl font-bold my-2 hover:underline underline-offset-2 md:text-2xl sm:text-lg lg:text-xl'>
                    {title}
                </h2>
            </Link>
            <p className='text-sm mb-2 overflow-hidden max-h-[100px]'>{summary}</p>
            <span className='text-primary font-semibold'>{time}</span>
        </li>
    )
}

const Article = ({ img, title, date, link }) => {
    return (
        <li className='relative w-full p-4 my-6 rounded-xl flex sm:flex-col items-center justify-between bg-light dark:bg-dark text-dark first:mt-0 border border-dark dark:border-light border-solid border-r-4 border-b-4'>
            <Link href={link} target="_blank">
                <h2 className='capitalixe text-xl sm:text-base font-semibold hover:underline underline-offset-2 dark:text-light'>
                    {title}</h2>
            </Link>
            <span className='text-primary font-semibold pl-4 sm:pl-0 sm:pt-1 sm:self-start sm:text-sm'>{date}</span>
        </li>
    )
}

function articles() {
    return (
        <>
            <Head>
                <title>Portfolio | Projects </title>
                <meta name='description' content="tech articles" />
            </Head>
            <TransitionEffect />
            <main className='w-full flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Welcome to my tech talks!" className='mb-16 sm:!text-5xl sm:mb-8 xs:!text-4xl' />

                    <ul className='grid grid-cols-2 gap-16 lg:gap-8 md:gap-y-16 md:grid-cols-1'>
                        <FeaturedArticle
                            title="Decoding Serverless Image Processing: AWS Lambda Functions vs. AWS Serverless Image Handler"
                            summary="Hey there! If you’re considering serverless image processing in the AWS environment, you might have come across two popular options: AWS Lambda Functions and the AWS Serverless Image Handler service. In this blog post, I’ll compare these two services based on their pros and cons, helping you make an informed decision for your image processing needs."
                            time="9 min read"
                            img={article1}
                            link="https://ramishadev.wordpress.com/2023/06/11/decoding-serverless-image-processing-aws-lambda-functions-vs-aws-serverless-image-handler/"
                        />
                        <FeaturedArticle
                            title="Unleashing Productivity: 5 Unique Web Development Tools You Need to Try"
                            summary="As a web developer, staying productive and efficient is key to delivering high-quality projects. Over the years, I’ve come across several incredible web development tools that have significantly enhanced my productivity. In this blog post, I’ll be sharing my top 5 favorite tools that have become indispensable in my everyday coding workflow. Whether you’re a beginner or an experienced developer, these tools can revolutionize your web development process. Let’s explore these lesser-known gems! 👽"
                            time="5 min read"
                            img={article2}
                            link="https://ramishadev.wordpress.com/2023/06/10/unleashing-productivity-5-unique-web-development-tools-you-need-to-try/"
                        />

                    </ul>
                    <h2 className='w-full text-center my-16 font-bold text-4xl mt-32'>All Articles</h2>
                    <ul>
                        <Article
                            title="Neumorphism-The modern UI trend"
                            date="June 23, 2022"
                            link="https://ramishadev.wordpress.com/2022/06/23/neumorphism-the-modern-ui-trend/"
                            img={article1}
                        />
                        <Article
                            title="10 React Questions To Crack Your Next Interview"
                            date="June 29, 2022"
                            link="https://ramishadev.wordpress.com/2022/06/29/10-react-questions-to-crack-your-next-interview/"
                            img={article1}
                        />
                        <Article
                            title="L1 VS L2 REGULARIZATION"
                            date="August 9, 2022"
                            link="https://ramishadev.wordpress.com/2022/08/09/l1-vs-l2-regularization/"
                            img={article1}
                        />
                        <Article
                            title="Flutter – The One-Stop Shop."
                            date="March 2, 2022"
                            link="https://ramishadev.wordpress.com/2022/06/29/flutter-the-one-stop-shop/"
                            img={article1}
                        />
                    </ul>

                </Layout>
            </main>
        </>
    )
}

export default articles