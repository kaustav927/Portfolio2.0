import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Link from "next/link";
import { ProjectData } from "../components/ProjectData";
import { FiPlus, FiMinus } from "react-icons/fi";

import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Head from "next/head";

//import {Parallax, ParallaxLayer} from '@react-spring/parallax'
const projects: NextPage = () => {
  return (
    <body className="bg-cool-white dark:bg-slate-800 text-black ">
      <Head>
        <title>Kaustav Sharma | Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col content-center items-center">
        <Navbar />
        <div className="container mt-1 flex justify-center items-center w-screen h-screen px overflow-hidden">
          <div className="flex flex-col">{/* Project Content */}</div>
        </div>
      </div>
    </body>
  );
};

export default projects;