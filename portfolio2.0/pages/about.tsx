import type { NextPage } from 'next'
import React from "react";
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'

//import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const About: NextPage = () => {
  
  return (
  <div className="bg-cool-white dark:bg-slate-800 text-black ">

    <Head>
      <title>Kaustav Sharma | About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/> 
   <div className="flex flex-col items-center bg-cool-white dark:bg-slate-800 overflow-x-hidden">
      

      <div className="container mt-10 justify-between w-10/12 md:w-10/12 lg:w-8/12 lg:max-w-screen-lg h-full flex flex-col items-center py-4">

          <div className="container mt-1 flex flex-col justify-center items-center h-9/12 px overflow-x-hidden">
              <div className="p-8 mt-16 md:mt-24">
                <Image className="rounded-lg" src="/images/pp.png" alt="" width="550" height="550"  />
              </div>
              <div className="p-8 mb-24 dark:text-white">
                <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              </div>
          </div>
      
      </div>
    </div>
  </div> 
   
  )
}

export default About