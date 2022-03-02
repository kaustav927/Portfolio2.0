import Container from '../components/Container';
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from './Projects'

export default function Home(){
  return (
    <body className="bg-cool-white h-screen overflow-hidden body">
      <div className="text-black">
      <Head>
        <title>Kaustav Sharma</title>
        <link rel="icon" href="/favicon.ico"  />
      </Head>

      <Navbar/>
      <Hero/>
      <Projects/>
    


     </div>
    </body>
   
  )
}
