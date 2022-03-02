import React from 'react'

function Hero() {
  return (
    <div className="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full ">
      <div className="flex flex-wrap md:flex-nowrap">
            <div className="flex flex-wrap ml-5 lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-10">
            <div className="relative w-full max-w-lg">
            <h1 className="font-cd-regular mr-7 text-2xl my-10 md:text-6xl lg:text-7xl text-center md:text-left">Building beautiful web experiences.</h1>
                <div className="absolute top-0 -left-4 w-72 h-72 bg-copper-rust rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-100 animate-blob animation-delay-4000"></div>
            </div>
               
                <div className="w-full flex justify-center md:justify-start">
                    <button className="mr-6 py-4 bg-theme text-bla font-bold mt-12 flex items-center space-x-3">
                        <span className="font-cd-regular">View my work.</span>
                    </button>
                </div>
            </div>
      {/* image */}
      </div>
    </div>
  )
}

export default Hero
