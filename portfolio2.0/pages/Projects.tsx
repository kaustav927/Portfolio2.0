import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Link from "next/link";
import { ProjectData } from "../components/ProjectData";
import { FiPlus, FiMinus } from "react-icons/fi";
import Footer from "../components/Footer";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Head from "next/head";
import TimelineProjects from "../components/TimelineProjects";
//import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const projects: NextPage = () => {
  return (
    <div className="h-screen scroll-smooth bg-cool-white dark:bg-slate-800 text-black ">

    <Head>
      <title>Kaustav Sharma | About</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/> 
   <div className="flex flex-col items-center bg-cool-white dark:bg-slate-800 overflow-x-hidden">
     <TimelineProjects/>
      <Footer />
    </div>
  </div> 
  );
};


export default projects;

