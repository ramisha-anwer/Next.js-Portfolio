import { useScroll, motion } from 'framer-motion'
import { React, useRef } from 'react'
import LiIcon from './LiIcon'


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref=useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 bottom:mb-0 w-[80%] mx-auto flex flex-col items-center justify-start'>
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
            <p className='font-medium w-full pt-2 md:text-sm'>
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
                            position="Associate Software Engineer" company="Elite IT Team"
                            companyLink={"/"}
                            time="08/23-02/24" address="Manchester,UK"
                            work="In my role, I effectively translated stakeholder needs into detailed design documents, streamlining development processes and reducing project timelines by 30%. Through regular international client meetings, I ensured a thorough understanding of client requirements, leading to a 20% higher project approval rate. Across various projects, including a Business Simulation Application and a Manufacturing Facility Management System, my use of React and Node.js facilitated the creation of tailored solutions, introducing innovative features and optimizing operational efficiency for clients."
                        />
                        <Details
                            position="Web Engineer Intern" company="Markaz Technologies"
                            companyLink={"/"}
                            time="02/2023 – 05/2023" address=" Islamabad,Pakistan"
                            work="I spearheaded a redesign of the admin portal, utilizing ReactJS and RESTful APIs, leading to a 30% increase in operational efficiency. By implementing automated features with Node.js and MongoDB, we saved over 200 man-hours monthly. Integration of third-party APIs enhanced the ordering process, boosting customer satisfaction, while automated testing resulted in a 50% reduction in bugs and faster deployment."
                        />
                        <Details
                            position="React Developer" company="Sem3 Technologies"
                            companyLink={"/"}
                            time="07/2022 – 11/2022" address="Berkeley, California (Remote)"
                            work="I created a Figma to React Automator utilizing ReactJS, Node.js, and the Figma API, streamlining the generation of React components from design files and cutting manual work by 60%. Additionally, I utilized XML/JSON data models, integrated them with REST APIs, and displayed dynamic data on the front-end using ReactJS and Axios. Moreover, I developed and deployed SaaS applications on AWS, leveraging EC2, RDS, and S3 services to ensure scalability, security, and cost-effectiveness."
                        />
                        <Details
                            position=" Frontend Developer Intern" company="SehatBase"
                            companyLink={"/"}
                            time="06/2022 - 08/2022" address="Islamabad, Pakistan"
                            work="Played a key role in developing three significant modules of the SehatBase website, employing ReactJS and Material-UI to enhance user-friendliness and efficiency. Additionally, I automated the delivery of patient reports using the WhatsApp API, effectively reducing manual efforts while enhancing the speed and accuracy of report delivery processes."
                        />
                    </ul>
                </div>
            </div>
        </>

    )
}

export default Experience