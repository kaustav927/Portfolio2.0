import React from "react";

function Hero() {
  return (
    <div className="font-cd-bold container mt-1 flex justify-center items-center w-screen h-screen px overflow-x-hidden">
      <div className="flex flex-col">
        <div className="relative w-full max-w-lg mx-auto">
          <h1 className="z-50 font-cd-bold text-2xl my-15 md:text-4xl lg:text-6xl text-center md:text-left dark:text-white">
            Building beautiful web experiences.
          </h1>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob overflow-x-hidden"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-2000 overflow-x-hidden"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-4000 overflow-x-hidden"></div>
        </div>

        <div className="w-full flex justify-center md:justify-start">
          <button className="mr-6 py-4 bg-theme text-bla font-bold mt-12 flex items-center space-x-3">
            <span className="font-cd-medium dark:text-white">
              View my work.
            </span>
          </button>
        </div>
      </div>

      {/* image */}
    </div>
  );
}


export default Hero;

