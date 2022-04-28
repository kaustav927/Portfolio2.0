/* eslint-disable @next/next/link-passhref */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import PropTypes, { InferProps } from "prop-types";
import {useTheme} from 'next-themes'  
import {BsFillSunFill,BsFillMoonFill} from 'react-icons/bs'




function MobileNav({open, setOpen, theme,setTheme}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-cool-white/70 dark:bg-slate-800/70 bg-blur-md transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter  `}>
            <div className="flex items-center justify-center filter  bg-cool-white dark:bg-slate-800 h-20"> {/*logo container*/}
                <a className="text-xl font-cd-semibold dark:text-white" href="/">@kaust_av</a>
            </div>
            <div className="flex flex-col ml-4">
                    <h1 className="text-2xl mt-1.5 mx-auto">
                        {theme==='light' ? <BsFillMoonFill className="text-slate-800" onClick={()=>setTheme(theme === 'light'? 'dark':'light')}/> : <BsFillSunFill className="text-cool-white" onClick={()=>setTheme(theme === 'light'? 'dark':'light')}/>}
                    </h1>
                    <Link href="/about">
                        <h1 className="text-md font-cd-semibold dark:text-white py-4" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>About</h1>
                    </Link>
                    <Link href="/projects">
                        <h1 className="text-sm font-cd-semibold dark:text-white py-4" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Projects</h1>
                    </Link>
                    <Link href="/contact">
                        <h1 className="text-sm font-cd-semibold dark:text-white py-4" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Contact</h1>
                    </Link>
                    <Link href="https://drive.google.com/file/d/18XyT6wPX2IWdWv0VCqOtwW7ZXYSuAm_g/view?usp=sharing">
                        <a href="https://drive.google.com/file/d/18XyT6wPX2IWdWv0VCqOtwW7ZXYSuAm_g/view?usp=sharing" target="_blank" rel="noreferrer">
                            <h1 className="text-sm font-cd-semibold dark:text-white py-4" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>Resume</h1>
                        </a>
                    </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const {theme,setTheme} = useTheme()
    const [open, setOpen] = useState(false)

    return (
        <div className="z-50 sticky top-0 w-screen flex flex-col h-20 items-center filter bg-cool-white/70 dark:bg-slate-800/70 backdrop-blur-md overflow-x-hidden">

        
        <nav className=" flex items-center py-4 container w-10/12 md:w-10/12 lg:w-8/12">
            {open?<MobileNav open={open} setOpen={setOpen} theme={theme} setTheme={setTheme}/>:null}

            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-cd-regular md:text-2xl lg:text-2xl dark:text-white" href="/">@kaust_av</a>
            </div>
            
            <div className="w-9/12 flex justify-end items-center font-cd-regular">
                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black dark:bg-white transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black dark:bg-white transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black dark:bg-white transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <h1 className="text-xl mt-1.5 px-2">
                        {theme==='light' ? <BsFillMoonFill className="text-slate-800" onClick={()=>setTheme(theme === 'light'? 'dark':'light')}/> : <BsFillSunFill className="text-cool-white" onClick={()=>setTheme(theme === 'light'? 'dark':'light')}/>}
                    </h1>
               
                    <Link href="/about">
                        <h1 className="text-sm font-regular px-2 dark:text-white">About</h1>
                    </Link>
                    <Link href="/projects">
                        <h1 className="text-sm font-regular px-2 dark:text-white">Projects</h1>
                    </Link>
                    <Link href="/contact">
                        <h1 className="text-sm font-regular px-2 dark:text-white">Contact</h1>
                    </Link>
                    <Link href='https://drive.google.com/file/d/18XyT6wPX2IWdWv0VCqOtwW7ZXYSuAm_g/view?usp=sharing'>
                        <a target="_blank">
                            <h1 className="text-sm font-semibold px-2 dark:text-white">Resume</h1>
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
        </div>
    )
}