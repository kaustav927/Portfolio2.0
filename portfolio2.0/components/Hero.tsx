import React from "react";

function Hero() {
  return (
    <div className="container mt-1 flex justify-center items-center w-screen h-screen px overflow-hidden">
      <div className="flex flex-col">
        <div className="relative w-full max-w-lg mx-auto">
          <h1 className="z-50 font-cd-semibold  text-2xl my-15 md:text-6xl lg:text-7xl text-center md:text-left dark:text-white">
            Building beautiful web experiences.
          </h1>
          <div className="absolute top-0 -left-4 w-72 h-72 bg-slate-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-4000"></div>
        </div>

        <div className="w-full flex justify-center md:justify-start">
          <button className="mr-6 py-4 bg-theme text-bla font-bold mt-12 flex items-center space-x-3">
            <span className="font-cd-regular dark:text-white">
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