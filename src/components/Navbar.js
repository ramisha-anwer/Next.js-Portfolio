import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
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

export const Navbar = () => {

    const [mode, setMode] = useThemeSwitcher()

    return (
        <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light'>
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
                className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode=="dark"? "bg-light text-dark":"bg-dark text-light"}`}
                >
                    {mode === "dark" ?
                     <MoonIcon className="fill-dark" />:
                        <SunIcon className="fill-dark" />
                       
                    }
                </button>

            </nav>
            <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
                <Logo />
            </div>
        </header>
    )
}
