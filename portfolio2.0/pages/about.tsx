import type { NextPage } from 'next'
import React from "react";
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'

//import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const About: NextPage = () => {
  
  return (
  <div className="h-screen scroll-smooth bg-cool-white dark:bg-slate-800 text-black ">

    <Head>
      <title>Kaustav Sharma | About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/> 
   <div className="flex flex-col items-center bg-cool-white dark:bg-slate-800 overflow-x-hidden">
      <div className="container justify-between w-10/12 md:w-10/12 lg:w-8/12 lg:max-w-screen-lg flex flex-col items-center py-4">

          <div className="container mt-1 flex flex-col justify-center items-center h-9/12 px overflow-x-hidden">
            <div className=" flex flex-col items-left text-center dark:text-white py-8">
            
                <span className="text-md md:text-xl lg:text-2xl font-cd-bold py-1">Relentless Developer</span>
                <span className="text-sm font-cd-light py-1">Focused on Creating the Future</span>
               
            </div>
              <div className="">
                <Image className="rounded-lg boxShadow-lg" src="/images/pp.png" alt="" width="550" height="550"  />
              </div>
              <div className="py-8 mb-24 dark:text-white font-cd-medium">
                <p className="text-justify mb-8 text-sm">Hi, I&apos;m Kaustav Sharma, a front-end engineer/dev, hacker, designer and 3D printer based in Toronto, Canada. </p>
                <p className="text-justify mb-8 text-sm">I started my coding journey by programming autonomous vehicle controls for VEX robotics in high school. My curiosity for computers lead me to pursue a CS degree at university, where I also gained over a year of internship experience working in a variety of engineer/dev and design roles.</p>
                <p className="text-justify mb-8 text-sm">My experience lead me to identify front-end development, product design, and full-stack development as the fields I’d like to specialize in most as of now. I am motivated to keep my skills fresh by completing side projects and reading about cutting-edge advancements blockchain, manufacturing, artificial intelligence and robotics. </p>
                <p className="text-justify mb-8 text-sm">Currently, I am looking for new-grad software engineer or frontend developer roles as I finish up my undergrad degree.  </p>
              </div>
          </div>
      
      </div>
      <Footer />
    </div>
  </div> 
   
  )
}

export default About