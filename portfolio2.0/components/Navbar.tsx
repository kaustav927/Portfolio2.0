import React from 'react'

import {useState} from 'react'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
    {children}
    </a> 
}

//https://dev.to/dmuraco3/responsive-global-navbar-in-nextjs-with-tailwindcss-45p4
function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter  `}>
            <div className="flex items-center justify-center filter drop-shadow-md bg-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">Kaustav Sharma</a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="text-xl font-medium my-4" href="#about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="#projects" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Projects
                </a>
                <a className="text-xl font-normal my-4" href="#contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
                <a className="text-lg font-normal my-4 bg-slate-800 py-2 px-4 rounded text-white mx-auto" href="https://drive.google.com/file/d/18XyT6wPX2IWdWv0VCqOtwW7ZXYSuAm_g/view?usp=sharing" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Resume
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {
    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter px-4 py-4 h-20 items-center px-8 md:px-14 lg-px24 w-full">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold  py-2 px-4" href="/">Kaustav Sharma</a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="#about">
                       <h1 className="text-lg  py-2 px-4">About</h1>
                    </NavLink>
                    <NavLink to="#projects">
                        <h1 className="text-lg  py-2 px-4">Projects</h1>
                    </NavLink>
                    <NavLink to="#contact">
                        <h1 className="text-lg  py-2 px-4">Contact</h1>
                    </NavLink>
                    <NavLink to="https://drive.google.com/file/d/18XyT6wPX2IWdWv0VCqOtwW7ZXYSuAm_g/view?usp=sharing">
                        <h1 className="text-lg bg-slate-800 py-2 px-4 rounded text-white">Resume</h1>
                    </NavLink>
                </div>
            </div>
        </nav>
    )

}
