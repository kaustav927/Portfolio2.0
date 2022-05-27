import Footer from "../components/Footer";
import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import Head from "next/head";
import TimelineProjects from "../components/TimelineProjects";
import {ProjectData20,ProjectData21,ProjectData22} from "../components/ProjectData";
const Projects: NextPage = () => {
  return (
    <div className="h-screen scroll-smooth bg-cool-white dark:bg-slate-800 text-black ">
    <Head>
      <title>Kaustav Sharma | Projects</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Navbar/> 
   <div className="flex flex-col items-center bg-cool-white dark:bg-slate-800 overflow-x-hidden">
      <TimelineProjects data20={ProjectData20} data21={ProjectData21} data22={ProjectData22}/>
      <Footer />
    </div>
  </div> 
  );
};


export default Projects;

