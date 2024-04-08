import { useScroll, motion } from 'framer-motion'
import { React, useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref=useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 bottom:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-center justify-start'>
        <LiIcon reference={ref} />
        <motion.div
        initial={{y:50}}
        whileInView={{y:0}}
        transition={{duration:0.5,type:"spring"}}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp; <a href={companyLink} target="_blank" className='text-[#19A7CE] '>@ {company}</a></h3>
            <span className='capitalize font-light text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}

function Experience() {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
    return (
        <>
            <div className='my-44 md:my-36'>
                <h2 className='font-bold text-6xl mb-32 w-full text-center md:mb-16 xs:text-4xl'>
                    Experience
                </h2>
                <div ref={ref} className='w-3/4 mx-auto relative lg:w-[90%] md:w-full'>
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className='absolute left-9 w-[4px] md:w-[2px] md:left-[30px] xs:left-[19px] h-full bg-dark dark:bg-light origin-top' />
                    <ul className='w-full flex flex-col items-start justify-between ml-4'>
                        <Details
                            position=" Software Engineer" company="Google"
                            companyLink={"/"}
                            time="  2022-Present" address=" Mountain View, CA"
                            work=" Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization.Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                        />
                        <Details
                            position=" Software Engineer" company="Google"
                            companyLink={"/"}
                            time="  2022-Present" address=" Mountain View, CA"
                            work=" Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                        />
                        <Details
                            position=" Software Engineer" company="Google"
                            companyLink={"/"}
                            time="  2022-Present" address=" Mountain View, CA"
                            work=" Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                        />
                        <Details
                            position=" Software Engineer" company="Google"
                            companyLink={"/"}
                            time="  2022-Present" address=" Mountain View, CA"
                            work=" Worked on a team responsible for developing new features for Google's 
                        search engine, including improving the accuracy and relevance of search results and 
                        developing new tools for data analysis and visualization."
                        />
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Experience