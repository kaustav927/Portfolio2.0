import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Home: NextPage = () => {
  return (
    <body className="bg-cool-white h-screen overflow-hidden">
      <div className="text-black">
      <Head>
        <title>Kaustav Sharma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Hero/>


     </div>
    </body>
   
  )
}

export default Home
