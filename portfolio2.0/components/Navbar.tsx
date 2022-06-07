import React, { useState, useEffect } from "react";
import Link from "next/link";

import PropTypes, { InferProps } from "prop-types";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";

interface mobleNavProps {
  open: boolean;
  setOpen: Function;
  theme: string;
  setTheme: Function;
}






function MobileNav({ open, setOpen, theme, setTheme }: mobleNavProps) {
  return (
    <div
      className={`absolute top-0 left-0 overflow-x-hidden h-screen w-screen z-50 bg-cool-white/70 dark:bg-slate-800/70 backdrop-blur-md transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter  lg:hidden`}
    >
      <div className="flex items-center mt-20 justify-center filter h-20 md:hidden">
        {/*logo container*/}
        <h1 className="text-2xl mx-auto ">
          {theme === "light" ? (
            <BsFillMoonFill
              className="text-black"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            />
          ) : (
            <BsFillSunFill
              className="text-white"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            />
          )}
        </h1>
      </div>

      <div className="flex flex-col ml-8 w-10/12">
        <Link href="/about" passHref>
          <h1
            className="text-md font-cd-medium dark:text-white py-4"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            About
          </h1>
        </Link>
        <Link href="/Projects" passHref>
          <h1
            className="text-md font-cd-medium dark:text-white py-4"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 500)
            }
          >
            Projects
          </h1>
        </Link>
        <Link href="/contact" passHref>
          <h1
            className="text-md font-cd-medium dark:text-white py-4"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            Contact
          </h1>
        </Link>
        <Link href="https://drive.google.com/file/d/18XyT6wPX2IWdWv0VCqOtwW7ZXYSuAm_g/view?usp=sharing">
          <a
            href="https://drive.google.com/file/d/18XyT6wPX2IWdWv0VCqOtwW7ZXYSuAm_g/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <h1
              className="text-md font-cd-medium dark:text-white py-4 "
              onClick={() =>
                setTimeout(() => {
                  setOpen(!open);
                }, 100)
              }
            >
              Resume
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
}









export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      {open ? (
        <MobileNav
          open={open}
          setOpen={setOpen}
          theme={theme}
          setTheme={setTheme}
        />
      ) : null}

      <div className="z-50 sticky top-0 w-screen overflow-x-none flex flex-col h-20 items-center filter bg-cool-white/70 dark:bg-slate-800/70 backdrop-blur-md ">
        <nav className="flex items-center mt-1 py-4 container w-10/12 md:w-10/12 lg:w-8/12 lg:max-w-screen-lg overflow-hidden">
          <div className="w-3/12 flex items-left">
            <Link href="/" passHref>
                <h1 className="cursor-default text-sm text-left font-cd-medium md:text-2xl md:font-cd-regular lg:text-2xl lg:font-cd-regular dark:text-white">@kaust_av</h1>
            </Link>
          </div>
          <div className="w-9/12 flex justify-end items-center font-cd-regular ">
            <div
              className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden"
              onClick={() => {
                setOpen(!open);
              }}
            >
              {/* hamburger button */}
              <span
                className={`h-1 w-full bg-black dark:bg-white transform transition duration-300 ease-in-out ${
                  open ? "rotate-45 translate-y-3.5" : ""
                }`}
              />
              <span
                className={`h-1 w-full bg-black dark:bg-white transition-all duration-300 ease-in-out ${
                  open ? "w-0" : "w-full"
                }`}
              />
              <span
                className={`h-1 w-full bg-black dark:bg-white transform transition duration-300 ease-in-out ${
                  open ? "-rotate-45 -translate-y-3.5" : ""
                }`}
              />
            </div>

            <div className="hidden md:flex">
              <h1 className="text-lg px-4">
                {theme === "light" ? (
                  <BsFillMoonFill
                    className="text-slate-800 z-50"
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                  />
                ) : (
                  <BsFillSunFill
                    className="text-cool-white z-50"
                    onClick={() =>
                      setTheme(theme === "light" ? "dark" : "light")
                    }
                  />
                )}
              </h1>

              <Link href="/" passHref>
                <h1 className="text-sm font-regular mx-2 dark:text-white">
                  Home
                </h1>
              </Link>

              <Link href="/about" passHref>
                <h1 className="text-sm font-regular mx-2 dark:text-white">
                  About
                </h1>
              </Link>
              <Link href="/Projects" passHref>
                <h1 className="text-sm font-regular mx-2 dark:text-white">
                  Projects
                </h1>
              </Link>
              <Link href="/contact" passHref>
                <h1 className="text-sm font-regular mx-2 dark:text-white">
                  Contact
                </h1>
              </Link>
              <Link href="https://drive.google.com/file/d/18XyT6wPX2IWdWv0VCqOtwW7ZXYSuAm_g/view?usp=sharing">
                <a target="_blank">
                  <h1 className="text-sm font-medium ml-2 dark:text-white">
                    Resume
                  </h1>
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}