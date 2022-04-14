import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Projects from './Projects'
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const Home: NextPage = () => {
  return (
    <body className="bg-cool-white body text-black">
      <div>
      <Head>
        <title>Kaustav Sharma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Parallax pages={2}>
      
        <ParallaxLayer>
        <Navbar/>
          <Hero/>
        </ParallaxLayer>

        <ParallaxLayer offset={1}>
          <Projects/>
        </ParallaxLayer>

        <ParallaxLayer>
          
        </ParallaxLayer>
      </Parallax>

 
     </div>
    </body>
   
  )
}

export default Home