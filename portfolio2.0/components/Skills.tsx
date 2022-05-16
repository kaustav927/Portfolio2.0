import React from 'react'

const Skills = () => {
  const langLearn = ["Node.js", "Next.js", "Pandas", "Numpy", "React.js", "SCSS", "TailwindCSS", "AWS", "MongoDB", "HTML5"]
  const web3Tech = ["Ethers.js", "Web3.js", "Solidity", "Hardhat.js", "OpenZeppelin", "The Graph", "IPFS"]
  const ProgLang = ["C++", "JavaScript", "TypeScript", "Go", "Rust", "Python", "R", "MATLAB"]
  return(
    
      <div className="container mt-14 w-10/12 lg:w-8/12 lg:max-w-screen-lg flex flex-col items-begining py-4">
       <h2 className="relative text-4xl font-cd-bold dark:text-white">Skills</h2> 
     
      <div>
   
      <div className="relative flex w-full mt-6 ">
        <div className="py-4 animate-marquee whitespace-nowrap">
          {langLearn.map((item, index) => (
            <span key={index} className="font-cd-regular text-2xl mx-4 dark:text-white">{item}</span>
          ))}
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
        {langLearn.map((item, index) => (
            <span key={index} className="font-cd-regular text-2xl mx-4 dark:text-white">{item}</span>
          ))}
        </div>
      </div>

      <div className="relative flex  mt-6">
        <div className="py-4 animate-marquee whitespace-nowrap">
          {web3Tech.map((item, index) => (
            <span key={index} className="font-cd-regular text-2xl mx-4 dark:text-white">{item}</span>
          ))}
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
        {web3Tech.map((item, index) => (
            <span key={index} className="font-cd-regular text-2xl mx-4 dark:text-white">{item}</span>
          ))}
        </div>
      </div>


      <div className="relative flex  mt-6">
        <div className="py-4 animate-marquee whitespace-nowrap">
          {ProgLang.map((item, index) => (
            <span key={index} className="font-cd-regular text-2xl mx-4 dark:text-white">{item}</span>
          ))}
        </div>
        <div className="absolute top-0 py-4 animate-marquee2 whitespace-nowrap">
        {ProgLang.map((item, index) => (
            <span key={index} className="font-cd-regular text-2xl mx-4 dark:text-white">{item}</span>
          ))}
        </div>
      </div>


</div>
</div>
)
}

export default Skills