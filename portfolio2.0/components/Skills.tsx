import React from 'react'

const Skills = () => {
  const frontend = ["Node.js", "Next.js", "Pandas", "Numpy", "React.js", "SCSS", "TailwindCSS", "AWS", "MongoDB", "HTML5"]
  const blockchain = ["Ethers.js", "Web3.js", "Solidity", "Hardhat.js", "OpenZeppelin", "The Graph", "IPFS"]
  const backend = ["C++", "JavaScript", "TypeScript", "Go", "Rust", "Python", "R", "MATLAB"]
  const title = "Tech I've Used"
  return (

    <div className="container mt-14 w-10/12 lg:w-8/12 lg:max-w-screen-lg flex flex-col items-begining py-4">
      <h2 className="underline relative text-4xl font-cd-bold dark:text-white">{title}</h2>

      <div className="flex flex-col">

        <h1 className="text-xl font-cd-bold mt-8 dark:text-white">Frontend</h1>
          <div className="flex-wrap flex mt-2">
            {frontend.map((item, index) => (
              <span key={index} className="font-cd-medium mb-3 text-white bg-slate-800 dark:text-black dark:bg-cool-white text-sm mr-3 px-3 py-2">{item}</span>
            ))}
          </div>

        <h1 className="text-xl font-cd-bold mt-8 dark:text-white">Blockchain</h1>
        <div className="flex-wrap flex mt-2">
            {blockchain.map((item, index) => (
              <span key={index} className="font-cd-medium mb-3 text-white bg-slate-800 dark:text-black dark:bg-cool-white text-sm mr-3 px-3 py-2">{item}</span>
            ))}
          </div>

        <h1 className="text-xl font-cd-bold mt-8 dark:text-white">Backend</h1>
        <div className="flex-wrap flex mt-2">
            {backend.map((item, index) => (
              <span key={index} className="font-cd-medium mb-3 text-white bg-slate-800 dark:text-black dark:bg-cool-white text-sm mr-3 px-3 py-2">{item}</span>
            ))}
        </div>

      </div>
    </div>
  )
}

export default Skills

//marquee 
   /* <div className="relative flex  mt-1">
      <div className="py-4 animate-marquee whitespace-nowrap">
        {backend.map((item, index) => (
          <span key={index} className="font-cd-regular text-sm mx-4 dark:text-white">{item}</span>
        ))}
      </div>
      <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
      {backend.map((item, index) => (
          <span key={index} className="font-cd-regular text-sm mx-4 dark:text-white">{item}</span>
        ))}
      </div>
    </div>*/