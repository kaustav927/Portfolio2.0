import React from "react";

function Footer() {
  return (
    <div className="dark:text-white font-cd-light container mt-20  w-10/12 md:w-10/12 lg:w-8/12 h-50 flex flex-col lg:max-w-screen-lg items-center justify-between py-4 overflow-x-hidden">
      <div className="w-full flex justify-between ">
        <div className="border mr-10 px-20 ml-30 h-64 w-1/3 bg-slate-500"></div>
        <div className="border mx-10 px-20 ml-30 h-64 w-1/3 bg-slate-500"></div>
        <div className="border ml-10 px-20 ml-30 h-64 w-1/3 bg-slate-500"></div>
      </div>

      <div className="w-full flex justify-between mt-4">
        <div className="border mr-10 px-20 ml-30 h-10 w-1/3 bg-slate-500"></div>
        <div className="border mx-10 px-20 ml-30 h-10 w-1/3 bg-slate-500"></div>
        <div className="border ml-10 px-20 ml-30 h-10 w-1/3 bg-slate-500"></div>
      </div>
    </div>
  );
}

export default Footer;
