import React from "react";
import {CgArrowLongDown} from 'react-icons/cg'
function Hero() {
  return (
    <div className="font-cd-bold mx-4 container mt-1 flex justify-center items-center w-screen h-screen px overflow-x-hidden px-4">
      <div className="flex flex-col">
        <div className="relative w-full max-w-lg mx-auto">
          <h1 className="z-50 font-cd-bold text-2xl my-15 md:text-4xl lg:text-6xl text-center md:text-left dark:text-white">
            Building Beautiful Web Experiences
          </h1>
          <div className="absolute z-40 top-0 -left-4 w-72 h-72 bg-slate-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-50 animate-blob overflow-x-hidden"></div>
          <div className="absolute z-40 top-0 -right-4 w-72 h-72 bg-yellow-500 dark:bg-sky-700 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-50 animate-blob animation-delay-2000 overflow-x-hidden"></div>
          <div className="absolute z-40 -bottom-8 left-20 w-72 h-72 bg-pink-500 dark:bg-teal-400 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-xl opacity-50 animate-blob animation-delay-4000 overflow-x-hidden"></div>
        </div>

        <div className="w-full flex justify-center md:justify-start ">
          <button className="mr-6 py-4 bg-theme text-bla font-bold mt-12 flex items-center space-x-3">
            <span className="font-cd-medium dark:text-white" >
              <span className="flex items-center justify-center z-50"> 
                 <h1>View my work </h1> 
                 <CgArrowLongDown className="animate-bounce dark:text-white"/> 
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* image */}
    </div>
  );
}


export default Hero;

