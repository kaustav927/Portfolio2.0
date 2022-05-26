import React from "react";
import {CgArrowLongUp} from 'react-icons/cg'
import Link from "next/link"
function Footer() {
  return (
    
    <div className="dark:text-white font-cd-light container mt-20  w-10/12 md:w-10/12 lg:w-8/12 h-50 flex flex-col lg:max-w-screen-lg items-center justify-between py-4 overflow-hidden">
      {/* Top Part of Footer */}
      <div className="w-full flex justify-between ">
      


        <div className="shrink w-1/3 h-40">
            <div className="text-sm font-cd-regular text-left dark:text-white">
              <Link href="/" passHref>
                <h1>Home</h1>
              </Link>
              <Link href="/about" passHref>
                <h1>About</h1>
              </Link>
              <Link href="/projects" passHref>
                <h1>Projects</h1>
              </Link>
              <Link href="/contact" passHref>
                <h1>Contact</h1>
              </Link>
            </div>
        </div>

        <div className="shrink w-1/3 h-40 ">
              <div className="text-sm font-cd-regular text-center dark:text-white">
              <Link href="/" passHref>
                <h1>Medium</h1>
              </Link>
              <Link href="/about" passHref>
                <h1>Substack</h1>
              </Link>
              <Link href="https://twitter.com/kaust_av" passHref>
              <a target="_blank">
                <h1>Twitter</h1>
              </a>
                
              </Link>
              <Link href="/contact" passHref>
                <h1>Telegram</h1>
              </Link>
              </div>
        </div>

        <div className="shrink w-1/3 h-40">
          <div className="text-sm font-cd-regular text-right dark:text-white">
                <Link href="https://github.com/kaustav927" passHref>
                <a target="_blank">
                  <h1>Github</h1>
                </a>
                </Link>
                <Link href="https://www.linkedin.com/in/kaustav-sharma/" passHref>
                <a target="_blank">
                  <h1>Linkedin</h1>
                </a>
                </Link>
                <Link href="https://drive.google.com/file/d/18XyT6wPX2IWdWv0VCqOtwW7ZXYSuAm_g/view?usp=sharing" passHref>
                <a target="_blank">
                  <h1>Resume</h1>
                </a>
                </Link>
                <Link href="https://github.com/kaustav927/Portfolio2.0/tree/main/portfolio2.0" passHref>
                <a target="_blank">
                  <h1>Site Code</h1>
                </a>
                </Link>
                </div>
          </div>
      </div>



    


      {/* Bottom Part of Footer */}
      <div className="w-full flex justify-between mt-4 mb-8 text-sm font-cd-regular">
        <div className="shrink h-10 w-1/3 lg:mr-5">
          <h1 className="text-left dark:text-white">@kaust_av</h1>
        </div>
        <div className="shrink h-10 w-1/3 lg:mx-5">
            <span className="flex items-center justify-center" onClick={()=>{(window.scrollTo(0,0))}}>
              <h1 className="text-center dark:text-white">Back To Top</h1>
              <CgArrowLongUp className="animate-bounce text-center dark:text-white md:text-lg lg:text-lg"/>
            </span>
        </div>
        <div className="shrink h-10 w-1/3 lg:ml-5">
         <h1 className="text-right dark:text-white">Portfolio 2022</h1>
        </div>
      </div>
    </div>


  );
}

export default Footer;
