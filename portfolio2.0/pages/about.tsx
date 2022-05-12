import type { NextPage } from 'next'
import React from "react";
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import pp from '../public/images/profilepic.jpg'

//import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const About: NextPage = () => {
  
  return (
  <div className="bg-cool-white dark:bg-slate-800 text-black ">
    <Head>
      <title>Kaustav Sharma | About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="flex flex-col content-center items-center">
        <Navbar  /> 
        <div className="container mt-1 flex justify-center items-center w-screen h-screen px overflow-hidden">
            <div className="mx-auto">
               <Image src='/images/pp.png' layout="fill" alt="Picture of Kaustav Sharma" unoptimized={true} />
            </div>
         </div>
    </div>
  </div> 
   
  )
}

export default About