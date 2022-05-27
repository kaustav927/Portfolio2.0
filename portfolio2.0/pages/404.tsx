

import type { NextPage } from 'next'
import React from "react";
import Navbar from '../components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
//import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const NotFound: NextPage = () => {
  
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
            
                <span className="text-md md:text-xl lg:text-2xl font-cd-bold py-1">Oooops...</span>
                <span className="text-sm font-cd-light py-1">This page cannot be found. </span>
                <span className="text-sm font-cd-light py-1"> <Link href='/'><a>Go Back to Home Page</a></Link> </span>
            </div>
            
          </div>
      
      </div>
      <Footer />
    </div>
  </div> 
   
  )
}

export default NotFound