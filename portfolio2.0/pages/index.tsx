import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BestProjects from "../components/BestProjects";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import NFT from "../components/NFT";
//import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const Home: NextPage = () => {
  return (
    <body className="scroll-smooth bg-cool-white dark:bg-black text-black ">
      <Head>
        <title>Kaustav Sharma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col content-center items-center overflow-x-hidden">
        
        <Hero />
        <BestProjects />
        {/*<NFT/>*/}
        <NFT/>
        <Skills />
        <Footer />
      </div>
    </body>
  );
};


export default Home;
