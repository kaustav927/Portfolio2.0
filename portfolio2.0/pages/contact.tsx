import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

function contact() {
  return (
<div className=" h-screen scroll-smooth bg-cool-white dark:bg-slate-800 text-black ">

<Head>
  <title>Kaustav Sharma | About</title>
  <link rel="icon" href="/favicon.ico" />
</Head>
<Navbar/> 
<div className="flex flex-col items-center bg-cool-white dark:bg-slate-800 overflow-x-hidden">
  <div className="container justify-between w-10/12 md:w-10/12 lg:w-8/12 lg:max-w-screen-lg flex flex-col items-center py-4">

      <div className="container mt-1 flex flex-col justify-center items-center h-full px overflow-hidden dark:text-white">
          
          <div className="flex flex-col md:flex-row lg:flex-row mt-4 w-full h-1/2">
            <div className="md:w-2/3 lg:w-2/3 w-full items-center justify-center mb-8 lg:mb-12 lg:">
              <h1 className="text-lg md:text-xl lg:text-3xl font-cd-bold text-left mb-8">Building Something Cool? Reach Out!</h1>
              {/* <p className="text-sm font-cd-medium text-left mb-6">I'm always looking for new opportunities to learn and grow.</p> */}
              <p className="text-md font-cd-medium text-left mb-6">Open to client projects, offers, or open-source collaboration. </p>
              <p className="text-sm font-cd-medium text-left mb-6">Available 24/7 for artists, creative agencies and startups from anywhere. </p>
            </div>


            <div className="md:w-1/2 lg:w-1/2 w-full ml-0 lg:ml-8 md:ml-8">
              <div className="flex flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="mb-4">
                    <h1 className="font-cd-semibold text-sm ml-2 text-center">Time Zone: </h1>
                    <h2 className="font-cd-regular text-sm ml-2 text-center"><span className="font-cd-medium mr-2">EST </span>   UTC-5:00</h2>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <div className="mb-4">
                      <h1 className="font-cd-semibold text-sm ml-2 text-center">Email: </h1>
                      <h2 className="font-cd-medium text-sm ml-2 text-center">ksharm27@outlook.com</h2>
                    </div>
                  </div>
               
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-4">
                      <h1 className="font-cd-semibold text-sm ml-2 text-center">Discord: </h1>
                      <h2 className="font-cd-regular text-sm ml-2 text-center">LuckyTiger#3256</h2>
                    </div>
                  </div>

              
                <Link href="https://twitter.com/kaust_av">
                <a target="_blank">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-4">
                      <h1 className="font-cd-semibold text-sm ml-2 text-center">Twitter: </h1>
                      <h2 className="font-cd-regular text-sm ml-2 text-center">@kaust_av</h2>
                    </div>
                  </div>
                  </a>
                </Link>
                <Link href="https://github.com/kaustav927">
                  <a target="_blank">
                  <div className="flex flex-col items-center justify-center">
                    <div className="mb-4">
                      <h1 className="font-cd-semibold text-sm ml-2 text-center">Github: </h1>
                      <h2 className="font-cd-regular text-sm ml-2 text-center">kaustav927</h2>
                    </div>
                  </div>
                  </a>
                </Link>
               
              </div>
            </div>
          </div>

          <div className=" mt-4 h-1/2 flex items-center justify-center">
            <h1 className="text-md md:text-xl lg:text-4xl underline py-40 font-cd-bold text-justify ">ksharm27@outlook.com</h1>
          </div>
      </div>
  
  </div>
  <Footer />
</div>
</div> 
  );
}

export default contact;
