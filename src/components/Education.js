import { useScroll, motion } from 'framer-motion'
import { React, useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({ type, time, place, info }) => {
    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 bottom:mb-0 w-[80%] md:w-[80%] mx-auto flex flex-col items-start justify-start'>
        <LiIcon reference={ref} />
        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
            <span className='capitalize  font-light text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {place}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {info}
            </p>
        </motion.div>
    </li>
}

function Education() {
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
                <h2 className='font-bold text-6xl mb-32 wfull text-center md:mb-16 xs:text-4xl'>
                    Education
                </h2>
                <div ref={ref} className='w-3/4 mx-auto relative lg:w-[90%] md:w-full'>
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className='absolute left-9 w-[4px] md:w-[2px] md:left-[30px] xs:left-[19px] h-full bg-dark dark:bg-light origin-top' />
                    <ul className='w-full flex flex-col items-start justify-between ml-4'>
                        <Details
                            type="Bachelor of Software Engineering"
                            time="2020-2024"
                            place="National University of Sciences and Technology"
                            info="Relevant modules: Object Oriented Programming (A), Operating Systems (A), Data Warehousing and Mining (B+)"
                        />
                        <Details
                            type=" FSC"
                            time="2017-2019"
                            place="Punjab College, Islamabad"
                            info="Relevant Modules: Calculus, Physics, and Statistics and Probability ."
                        />
                        

                    </ul>
                </div>
            </div>
        </>

    )
}

export default Education