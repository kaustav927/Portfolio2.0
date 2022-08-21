import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BestProjects from "../components/BestProjects";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import NFT from "../components/NFT";
import { GetServerSideProps } from "next";
import { fetchNFTs } from "../components/FetchNFTs";

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
        
        <Skills />
        <Footer />
      </div>
    </body>
  );
};
//

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  //Retriveing assets from OpenSea API
  const url =
    "https://api.opensea.io/api/v1/assets?owner=0x6a426b4cFed4C2b39D021E2FC0a2BEb47683273E&token_ids=20014&order_direction=asc";
  const options = { method: "GET" };
  const data = await fetchNFTs(url, options);
  if (!data) {
    return {
      notFound: true,
    };
  }
  console.log("api response:", data.props);
  return {
    props: {
      data: data.props.assets
    },
  };
};