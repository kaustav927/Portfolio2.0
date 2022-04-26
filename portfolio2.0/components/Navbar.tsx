/* eslint-disable @next/next/link-passhref */
import React, { useState } from 'react'
import Link from 'next/link'
import PropTypes, { InferProps } from "prop-types";



function NavLink({ to, children }: InferProps<typeof NavLink.propTypes>){
    return (<a href={to} className={`mx-4`}>
        {children}
    </a>)
}
NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
      ]).isRequired
  };


//https://dev.to/dmuraco3/responsive-global-navbar-in-nextjs-with-tailwindcss-45p4

export default function Navbar() {
    const [open, setOpen] = useState<boolean>(false)
    return (
        
        <nav className="z-50 font-cd-regular h-20 sticky top-0">
            {/* Moble Nav */}
            <div className={`absolute top-0 left-0 right-0 h-screen w-screen z-50 bg-cool-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter  `}>
                <div className="flex pl-4 items-center justify-start filter bg-cool-white h-20"> 
                    {/*logo container*/}
                    <Link href="/">
                         <a className="text-2xl font-cd-regular ">@kaust_av</a>
                    </Link>
                
                </div>
                <div className="flex flex-col ml-4">
                    <a className="text-sm font-normal my-4" href="#about" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                        About
                    </a>
                    <a className="text-sm font-normal my-4" href="#projects" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                        Projects
                    </a>
                    <a className="text-sm font-normal my-4" href="#contact" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                        Contact
                    </a>
                    <a className="text-sm font-normal" href="https://drive.google.com/file/d/18XyT6wPX2IWdWv0VCqOtwW7ZXYSuAm_g/view?usp=sharing" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                      <h1 className="text-sm my-4 font-semibold">Resume</h1>
                    </a>
                </div>
            </div>


        {/* Desktop Nav */}
        <div className="container mt-10 flex justify-between items-center w-screen h-screen mx-auto px md:px-14 lg:px-24">
            <div className="w-6/12 flex items-center">
                <Link href="#home">
                    <h1 className="text-2xl font-cd-regular ml-8">@kaust_av</h1>
                </Link>
            </div>

            <div className="w-6/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center mr-8 md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="#about">
                        <h1 className="text-md  font-regular">About</h1>
                    </NavLink>
                    <NavLink to="#projects">
                        <h1 className="text-sm   font-regular">Projects</h1>
                    </NavLink>
                    <NavLink to="#contact">
                        <h1 className="text-sm    font-regular">Contact</h1>
                    </NavLink>
                    <Link href='https://drive.google.com/file/d/18XyT6wPX2IWdWv0VCqOtwW7ZXYSuAm_g/view?usp=sharing'>
                        <a target="_blank">
                            <h1 className="text-sm font-semibold">Resume</h1>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
        </nav>
    )

}

