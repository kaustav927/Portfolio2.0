import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BestProjects from "../components/BestProjects";
import Footer from "../components/Footer";
//import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const Home: NextPage = () => {
  return (
    <body className="bg-cool-white dark:bg-slate-800 text-black ">
      <Head>
        <title>Kaustav Sharma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col content-center items-center overflow-x-none">
        
        <Hero />
        <BestProjects />
        <Footer />
      </div>
    </body>
  );
};


export default Home;
