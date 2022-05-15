import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

function contact() {
  return (
    <body className="bg-cool-white dark:bg-slate-800 text-black ">
      <Head>
        <title>Kaustav Sharma | About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col content-center items-center">
      
        <div className="container mt-1 flex justify-center items-center w-screen h-screen px overflow-hidden">
          <div className="flex flex-col">
            <form>Name</form>
            <input
              className="bg-gray-200 shadow-inner rounded p-2 flex-1 outline-none"
              type="email"
              aria-label="email"
              placeholder="Enter Account Username of Email"
            />
            <h1 className="text-sm">Description</h1>
            <form className="">
              <textarea
                placeholder="Enter your password description"
                className="bg-gray-200 shadow-inner rounded p-2 my-3 flex-1 w-3/4 h-52"
              />
            </form>
          </div>
        </div>
      </div>
    </body>
    
  );
}

export default contact;
