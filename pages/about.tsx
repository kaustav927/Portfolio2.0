import type { NextPage } from 'next'
import React from "react";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Head from 'next/head'

//import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const About: NextPage = () => {
  
  return (
    <body className="bg-cool-white dark:bg-slate-800 text-black ">
    <Head>
      <title>Kaustav Sharma | About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col content-center items-center">
        <Navbar  /> 
        <div className="container mt-1 flex justify-center items-center w-screen h-screen px overflow-hidden">
            <div className="flex flex-col">
                {/* About Content */}
            </div>
         </div>
      </div>
  </body>
   
  )
}

export default About