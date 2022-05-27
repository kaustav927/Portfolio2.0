import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Link from "next/link";
import { ProjectData20,ProjectData21,ProjectData22 } from "../components/ProjectData";
import { FiPlus, FiMinus } from "react-icons/fi";

const TimelineProjects =() => {
  interface selectedData {
    index: number | null | any;
  }
  interface project {
    name: string;
    id: string;
    timeLine: string;
    description: string;
    githubLink: string;
    devpostLink: string | undefined;
    websiteLink: string;
    Tools: string[];
  }


  let projectData20= ProjectData20;
  let projectData21 = ProjectData21;
  let projectData22 = ProjectData22;

  const [selected20, setSelected20] = useState<selectedData | any | null>(null);
  const [selected21, setSelected21] = useState<selectedData | any | null>(null);
  const [selected22, setSelected22] = useState<selectedData | any | null>(null);


  const toggle20 = (index: null) => {
    return selected20 === index ? setSelected20(null) : setSelected20(index);
  };

  const toggle21 = (index: null) => {
    return selected21 === index ? setSelected21(null) : setSelected21(index);
  };

  const toggle22 = (index: null) => {
    return selected22 === index ? setSelected22(null) : setSelected22(index);
  };

  return (
    <>
    <div className="container mt-10 justify-between flex items-center w-10/12 md:w-10/12 lg:w-8/12 lg:max-w-screen-lg py-4 overflow-x-hidden">
      <section className="w-full">
        <h2 id="work" className="text-4xl underline font-cd-bold dark:text-white">
          2022
        </h2>
        {projectData22.map((project1:any, index: any) => (
          <div
            key={project1.id}
            className="flex flex-col  mt-6 py-4 cursor-pointer"
          >
            <div
              className="text-2xl font-cd-bold dark:text-white"
              onClick={() => toggle22(index)}
              key={index}
            >
              <span className="flex justify-between">
                {project1.name}
                {selected22 === index ? (
                  <FiMinus className=" text-xs h-4 w-4 mt-4 dark:text-white" />
                ) : (
                  <FiPlus className="text-xs h-4 w-4 mt-4 py-auto dark:text-white" />
                )}
              </span>
              {selected22 === index ? (
                <>
                  <div className="flex justify-start mt-4">
                    <div className="w-2/3 mr-4 text-justify text-xs font-cd-regular dark:text-white">
                      <h1 className="text-sm mb-4 font-cd-semibold">
                        Description:
                      </h1>
                      {project1.description}
                    </div>
                    <div className="ml-4 w-1/3 flex flex-col font-cd-regular dark:text-white">
                      <h1 className="text-sm mb-4 font-cd-semibold">
                        Tools Used:
                      </h1>
                      <div className="flex-wrap flex mt-2">
                      {project1.Tools.map((tool:string, indexOne:number) => (
                        <span key={indexOne} className="font-cd-semibold mb-3 text-white bg-slate-800 dark:text-black dark:bg-cool-white text-sm mr-3 px-3 py-2">{tool}</span>
                      ))}
                      </div>
                    </div>
                  </div>
                  <span className="flex">
                    {
                      <Link href={project1.githubLink}>
                        <a target="_blank">
                          <FaGithub className="text-xl mr-3 mt-3 dark:text-white" />
                        </a>
                      </Link>
                    }
                    {project1.devpostLink ? (
                      <Link href={project1.devpostLink}>
                        <a target="_blank">
                          <SiDevpost className="text-xl ml-3 mt-3 dark:text-white" />
                        </a>
                      </Link>
                    ) : null}
                    {project1.websiteLink ? (
                      <Link href={project1.websiteLink}>
                        <a target="_blank">
                          <div className="px-2 py-0.5 bg-gradient-to-r from-green-300 to-blue-400 hover:from-pink-400 hover:to-yellow-600 rounded-full text-sm ml-5 mt-3 font-cd-medium">
                            {" "}
                            Live{" "}
                          </div>
                        </a>
                      </Link>
                    ) : null}
                  </span>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </section>
    </div>

    <div className="container mt-10 justify-between flex items-center w-10/12 md:w-10/12 lg:w-8/12 lg:max-w-screen-lg py-4 overflow-x-hidden">
    <section className="w-full">
      <h2 id="work" className="text-4xl underline font-cd-bold dark:text-white">
        2021
      </h2>
      {projectData21.map((project2:any, index: any) => (
        <div
          key={project2.id}
          className="flex flex-col  mt-6 py-4 cursor-pointer"
        >
          <div
            className="text-2xl font-cd-bold dark:text-white"
            onClick={() => toggle21(index)}
            key={index}
          >
            <span className="flex justify-between">
              {project2.name}
              {selected21 === index ? (
                <FiMinus className=" text-xs h-4 w-4 mt-4 dark:text-white" />
              ) : (
                <FiPlus className="text-xs h-4 w-4 mt-4 py-auto dark:text-white" />
              )}
            </span>
            {selected21 === index ? (
              <>
                <div className="flex justify-start mt-4">
                  <div className="w-2/3 mr-4 text-justify text-xs font-cd-regular dark:text-white">
                    <h1 className="text-sm mb-4 font-cd-semibold">
                      Description:
                    </h1>
                    {project2.description}
                  </div>
                  <div className="ml-4 w-1/3 flex flex-col font-cd-regular dark:text-white">
                    <h1 className="text-sm mb-4 font-cd-semibold">
                      Tools Used:
                    </h1>
                    <div className="flex-wrap flex mt-2">
                      {project2.Tools.map((tool:string, indexOne:number) => (
                        <span key={indexOne} className="font-cd-semibold mb-3 text-white bg-slate-800 dark:text-black dark:bg-cool-white text-sm mr-3 px-3 py-2">{tool}</span>
                      ))}
                      </div>
                  </div>
                </div>
                <span className="flex">
                  {
                    <Link href={project2.githubLink}>
                      <a target="_blank">
                        <FaGithub className="text-xl mr-3 mt-3 dark:text-white" />
                      </a>
                    </Link>
                  }
                  {project2.devpostLink ? (
                    <Link href={project2.devpostLink}>
                      <a target="_blank">
                        <SiDevpost className="text-xl ml-3 mt-3 dark:text-white" />
                      </a>
                    </Link>
                  ) : null}
                  {project2.websiteLink ? (
                    <Link href={project2.websiteLink}>
                      <a target="_blank">
                        <div className="px-2 py-0.5 bg-gradient-to-r from-green-300 to-blue-400 hover:from-pink-400 hover:to-yellow-600 rounded-full text-sm ml-5 mt-3 font-cd-medium">
                          {" "}
                          Live{" "}
                        </div>
                      </a>
                    </Link>
                  ) : null}
                </span>
              </>
            ) : null}
          </div>
        </div>
      ))}
    </section>
    </div>

    <div className="container mt-10 justify-between flex items-center w-10/12 md:w-10/12 lg:w-8/12 lg:max-w-screen-lg py-4 overflow-x-hidden">
      <section className="w-full">
        <h2 id="work" className="text-4xl underline font-cd-bold dark:text-white">
          2020
        </h2>
        {projectData20.map((project3: any, index: any) => (
          <div
            key={project3.id}
            className="flex flex-col  mt-6 py-4 cursor-pointer"
          >
            <div
              className="text-2xl font-cd-bold dark:text-white"
              onClick={() => toggle20(index)}
              key={index}
            >
              <span className="flex justify-between">
                {project3.name}
                {selected20 === index ? (
                  <FiMinus className=" text-xs h-4 w-4 mt-4 dark:text-white" />
                ) : (
                  <FiPlus className="text-xs h-4 w-4 mt-4 py-auto dark:text-white" />
                )}
              </span>
              {selected20 === index ? (
                <>
                  <div className="flex justify-start mt-4">
                    <div className="w-2/3 mr-4 text-justify text-xs font-cd-regular dark:text-white">
                      <h1 className="text-sm mb-4 font-cd-semibold">
                        Description:
                      </h1>
                      {project3.description}
                    </div>
                    <div className="ml-4 w-1/3 flex flex-col font-cd-regular dark:text-white">
                      <h1 className="text-sm mb-4 font-cd-semibold">
                        Tools Used:
                      </h1>
                      <div className="flex-wrap flex mt-2">
                      {project3.Tools.map((tool:string, indexOne:number) => (
                        <span key={indexOne} className="font-cd-semibold mb-3 text-white bg-slate-800 dark:text-black dark:bg-cool-white text-sm mr-3 px-3 py-2">{tool}</span>
                      ))}
                      </div>
                    </div>
                  </div>
                  <span className="flex">
                    {
                      <Link href={project3.githubLink}>
                        <a target="_blank">
                          <FaGithub className="text-xl mr-3 mt-3 dark:text-white" />
                        </a>
                      </Link>
                    }
                    {project3.devpostLink ? (
                      <Link href={project3.devpostLink}>
                        <a target="_blank">
                          <SiDevpost className="text-xl ml-3 mt-3 dark:text-white" />
                        </a>
                      </Link>
                    ) : null}
                    {project3.websiteLink ? (
                      <Link href={project3.websiteLink}>
                        <a target="_blank">
                          <div className="px-2 py-0.5 bg-gradient-to-r from-green-300 to-blue-400 hover:from-pink-400 hover:to-yellow-600 rounded-full text-sm ml-5 mt-3 font-cd-medium">
                            {" "}
                            Live{" "}
                          </div>
                        </a>
                      </Link>
                    ) : null}
                  </span>
                </>
              ) : null}
            </div>
          </div>
        ))}
      </section>
    </div>
    </>
  );
};

export default TimelineProjects;
