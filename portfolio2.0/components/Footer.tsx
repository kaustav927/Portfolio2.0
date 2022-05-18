import React from "react";
import {CgArrowLongUp} from 'react-icons/cg'
import Link from "next/link"
function Footer() {
  return (
    
    <div className="dark:text-white font-cd-light container mt-20  w-10/12 md:w-10/12 lg:w-8/12 h-50 flex flex-col lg:max-w-screen-lg items-center justify-between py-4 overflow-hidden">
      {/* Top Part of Footer */}
      <div className="w-full flex justify-between ">
      


        <div className="shrink w-1/3 h-40">
            <div className="text-sm text-left dark:text-white">
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
              {/* <div className="text-sm md:text-lg lg:text-lg text-center dark:text-white">
              <Link href="/" passHref>
                <h1>Art</h1>
              </Link>
              <Link href="/about" passHref>
                <h1>YouTube</h1>
              </Link>
              <Link href="/projects" passHref>
                <h1>Projects</h1>
              </Link>
              <Link href="/contact" passHref>
                <h1>Contact</h1>
              </Link>
              </div> */}
        </div>

        <div className="shrink w-1/3 h-40">
          <div className="text-sm md:text-lg lg:text-lg text-right dark:text-white">
                <Link href="/" passHref>
                  <h1>Github</h1>
                </Link>
                <Link href="/about" passHref>
                  <h1>Linkedin</h1>
                </Link>
                <Link href="/projects" passHref>
                  <h1>Twitter</h1>
                </Link>
                <Link href="/contact" passHref>
                  <h1>Site Code</h1>
                </Link>
                </div>
          </div>
      </div>



    


      {/* Bottom Part of Footer */}
      <div className="w-full flex justify-between mt-4 mb-8">
        <div className="shrink h-10 w-1/3 lg:mr-5">
          <h1 className="text-sm text-left dark:text-white">@kaust_av</h1>
        </div>
        <div className="shrink h-10 w-1/3 lg:mx-5">
            <span className="flex items-center justify-center">
              <h1 className="text-sm md:text-lg lg:text-lg text-center dark:text-white">Back To Top</h1>
              <CgArrowLongUp className="animate-bounce text-center dark:text-white md:text-lg lg:text-lg"/>
            </span>
        </div>
        <div className="shrink h-10 w-1/3 lg:ml-5">
         <h1 className="text-sm text-right dark:text-white">Portfolio 2022</h1>
        </div>
      </div>
    </div>


  );
}

export default Footer;
