import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Projects from './Projects'

const Home: NextPage = () => {
  return (
    <body className="bg-cool-white h-screen overflow-hidden body">
      <div className="text-black">
      <Head>
        <title>Kaustav Sharma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Hero/>
      <Projects/>
    


     </div>
    </body>
   
  )
}

export default Home