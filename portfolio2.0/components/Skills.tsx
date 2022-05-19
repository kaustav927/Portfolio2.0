import React from 'react'

const Skills = () => {
  const frontend = ["Node.js", "Next.js", "Pandas", "Numpy", "React.js", "SCSS", "TailwindCSS", "AWS", "MongoDB", "HTML5"]
  const blockchain = ["Ethers.js", "Web3.js", "Solidity", "Hardhat.js", "OpenZeppelin", "The Graph", "IPFS"]
  const backend = ["C++", "JavaScript", "TypeScript", "Go", "Rust", "Python", "R", "MATLAB"]
  return(
    
      <div className="container mt-14 w-10/12 lg:w-8/12 lg:max-w-screen-lg flex flex-col items-begining py-4">
       <h2 className="relative text-4xl font-cd-bold dark:text-white">Skills</h2> 
     
      <div>

      <h1 className="text-lg font-cd-semibold mt-8">Frontend</h1>
      <div className="relative flex w-full mt-1 ">
        <div className="py-4 flex animate-marquee whitespace-nowrap">
          {frontend.map((item, index) => (
            <span key={index} className="font-cd-regular text-sm mx-4 dark:text-white">{item}</span>
          ))}
        </div>
        <div className="absolute top-0 py-4 flex animate-marquee2 whitespace-nowrap">
        {frontend.map((item, index) => (
            <span key={index} className="font-cd-regular text-sm mx-4 dark:text-white">{item}</span>
          ))}
        </div>
      </div>

      <h1 className="text-lg font-cd-semibold mt-8">Blockchain</h1>
      <div className="relative flex  mt-1"> 
        <div className="py-4 animate-marqueeOpposite whitespace-nowrap">
          {blockchain.map((item, index) => (
            <span key={index} className="font-cd-regular text-sm mx-4 dark:text-white">{item}</span>
          ))}
        </div>
        <div className="absolute top-0 py-4 animate-marqueeOpposite2 whitespace-nowrap">
        {blockchain.map((item, index) => (
            <span key={index} className="font-cd-regular text-sm mx-4 dark:text-white">{item}</span>
          ))}
        </div>
      </div>

      <h1 className="text-lg font-cd-semibold mt-8">Backend</h1>
 

     
      {/* <div className="relative flex  mt-1">
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
      </div> */}
      
</div>
</div>
)
}

export default Skills