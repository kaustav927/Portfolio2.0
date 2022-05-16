import React from 'react'

const Skills = () => {
  const langLearn = ["Node.js", "Next.js", "Pandas", "Numpy", "React.js", "SCSS", "TailwindCSS", "AWS", "MongoDB", "HTML5"]
  const web3Tech = ["Ethers.js", "Web3.js", "Solidity", "Hardhat.js", "OpenZeppelin", "The Graph", "IPFS"]
  const ProgLang = ["C++", "JavaScript", "TypeScript", "Go", "Rust", "Python", "R", "MATLAB"]
  return(
    <div>
      <h2 id="work" className="container mt-10 justify-between w-10/12 md:w-10/12 lg:w-8/12 lg:max-w-screen-lg h-full flex flex-col items-center py-4 overflow-x-hidden">
      My work
      </h2>
   
      
       
   
      <div className="relative flex w-full overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap">
          {langLearn.map((item, index) => (
            <span key={index} className="text-4xl mx-4">{item}</span>
          ))}
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {langLearn.map((item, index) => (
            <span key={index} className="text-4xl mx-4">{item}</span>
          ))}
        </div>
      </div>

      <div className="relative flex overflow-x-hidden mt-10">
        <div className="py-12 animate-marquee whitespace-nowrap">
          {web3Tech.map((item, index) => (
            <span key={index} className="text-4xl mx-4">{item}</span>
          ))}
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {web3Tech.map((item, index) => (
            <span key={index} className="text-4xl mx-4">{item}</span>
          ))}
        </div>
      </div>


      <div className="relative flex overflow-x-hidden mt-10">
        <div className="py-12 animate-marquee whitespace-nowrap">
          {ProgLang.map((item, index) => (
            <span key={index} className="text-4xl mx-4">{item}</span>
          ))}
        </div>
        <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
        {ProgLang.map((item, index) => (
            <span key={index} className="text-4xl mx-4">{item}</span>
          ))}
        </div>
      </div>


</div>

)
}

export default Skills