import type { NextPage } from 'next'
import React from "react";
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

import Projects from './Projects'
//import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const Home: NextPage = () => {
  return (
    <body className="bg-cool-white body text-black ">
      
      <Head>
        <title>Kaustav Sharma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar /> 
      <Hero/>  
      <Projects/>
     
    </body>
   
  )
}

export default Home