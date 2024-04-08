import Link from 'next/link'
import { useRouter } from 'next/router'
import { React, useState } from 'react'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon, TwitterIcon } from './Icons'
import Logo from './Logo'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, className = "", title }) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`dark:bg-light h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath == href ? "w-full" : "w-0"}`}>
                &nbsp;
            </span>
        </Link>
    )
}
const CustomMobileLink = ({ href, className = "", title, toggle }) => {
    const router = useRouter();
    const handleClick = () => {
        toggle()
        router.push(href)
    }
    return (
        <button onClick={handleClick} className={`${className} relative group text-light dark:text-dark my-2`}>
            {title}
            <span className={`bg-light h-[1px] inline-block dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath == href ? "w-full" : "w-0"}`}>
                &nbsp;
            </span>
        </button>
    )
}

export const Navbar = () => {
    const [isOpen, setisOpen] = useState(false)
    const [mode, setMode] = useThemeSwitcher();

    const handleClick = () => {
        setisOpen(!isOpen)
    }

    return (
        <header className='w-full z-20 px-32 py-8 font-medium flex items-center justify-between dark:text-light relative lg:px-16 sm:px-8 md:px-12'>
            <button className='flex-col justify-center items-center hidden lg:flex' onClick={handleClick}>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm ${isOpen ? "rotate-45 translate-y-1" : " -translate-y-0.5"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? " opacity-0" : "opacity-100"}`}></span>
                <span className={`bg-dark dark:bg-light block transition-all duration-300 h-0.5 w-6 rounded-sm ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"}`}></span>
            </button>
            <div className='w-full flex justify-between items-center z-10 lg:hidden'>
                <nav>
                    <CustomLink href="/" title={"Home"} className="mr-4" />
                    <CustomLink href="/about" title={"About"} className="mr-4" />
                    <CustomLink href="/projects" title={"Projects"} className="mr-4" />
                    <CustomLink href="/articles" title={"Articles"} className="mr-4" />
                </nav>
                <nav className='flex flex-wrap justify-center items-center'>
                    <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><TwitterIcon /></motion.a>
                    <motion.a href="https://github.com/ramisha-anwer/" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><GithubIcon /></motion.a>
                    <motion.a href="https://www.linkedin.com/in/ramisha-anwer/" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-6 mx-3"><LinkedInIcon /></motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode == "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
                    >
                        {mode === "dark" ?
                            <MoonIcon className="fill-dark" /> :
                            <SunIcon className="fill-dark" />

                        }
                    </button>

                </nav>
            </div>
            {isOpen ? 
            <motion.div
            initial={{scale:0, opacity:0, x:"-50%",y:"-50%"}}
            animate={{scale:1,opacity:1}}
            className='lg:flex min-w-[70vw] hidden flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-dark/90 dark:bg-light/90 rounded-lg backdrop-blur-md py-24'>
                <nav className='flex flex-col items-center justify-center'>
                    <CustomMobileLink href="/" title={"Home"} className="mr-4" toggle={handleClick} />
                    <CustomMobileLink href="/about" title={"About"} className="mr-4" toggle={handleClick} />
                    <CustomMobileLink href="/projects" title={"Projects"} className="mr-4" toggle={handleClick} />
                    <CustomMobileLink href="/articles" title={"Articles"} className="mr-4" toggle={handleClick} />
                </nav>
                <nav className='flex flex-wrap justify-center items-center mt-4'>
                    <motion.a href="https://twitter.com" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-8 mx-3 sm:mx-1"><TwitterIcon /></motion.a>
                    <motion.a href="https://github.com/ramisha-anwer/" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-8 mx-3 sm:mx-1"><GithubIcon className="text-light dark:text-dark" /></motion.a>
                    <motion.a href="https://www.linkedin.com/in/ramisha-anwer/" target="_blank" whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className="w-8 mx-3 sm:mx-1"><LinkedInIcon /></motion.a>

                    <button
                        onClick={() => setMode(mode === "light" ? "dark" : "light")}
                        className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode == "dark" ? "bg-light text-dark" : "bg-dark text-light"}`}
                    >
                        {mode === "dark" ?
                            <MoonIcon className="fill-dark" /> :
                            <SunIcon className="fill-dark" />

                        }
                    </button>

                </nav>
            </motion.div> : null}

            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}
