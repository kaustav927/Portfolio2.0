import type { NextPage } from 'next'
import React from "react";
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Projects from './Projects'
//import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const Home: NextPage = () => {
  
  
  return (
    <body className="bg-cool-white dark:bg-slate-800 text-black flex flex-col items-center content-center">
      
      <Head>
        <title>Kaustav Sharma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar  /> 
      <Hero/>  
      <Projects/>
      <Contact/>
     
    </body>
   
  )
}

export default Home