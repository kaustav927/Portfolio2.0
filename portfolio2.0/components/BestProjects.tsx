import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Link from "next/link";
import { BestProjectData } from "./ProjectData/BestProjectData";
import { FiPlus, FiMinus } from "react-icons/fi";

const BestProjects = () => {
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

  const projectData = BestProjectData;
  const [selected, setSelected] = useState<selectedData | any | null>(null);

  const toggle = (index: null) => {
    return selected === index ? setSelected(null) : setSelected(index);
  };

  return (
    <div className="container mt-10 justify-between flex items-center w-10/12 md:w-10/12 lg:w-8/12 lg:max-w-screen-lg py-4 overflow-x-hidden">
      <section className="w-full">
        <h2 id="work" className="text-4xl font-cd-bold dark:text-white">
          My work
        </h2>

        {projectData.map((project, index: any) => (
          <div
            key={project.id}
            className="flex flex-col  mt-6 py-4 cursor-pointer"
          >
            <div
              className="text-2xl font-cd-bold dark:text-white"
              onClick={() => toggle(index)}
              key={index}
            >
              <span className="flex justify-between">
                {project.name}
                {selected === index ? (
                  <FiMinus className=" text-xs h-4 w-4 mt-4 dark:text-white" />
                ) : (
                  <FiPlus className="text-xs h-4 w-4 mt-4 py-auto dark:text-white" />
                )}
              </span>

              {selected === index ? (
                <>
                  <div className="flex justify-start mt-4">
                    <div className="w-2/3 mr-4 text-justify text-xs font-cd-regular dark:text-white">
                      <h1 className="text-sm mb-4 font-cd-semibold">
                        Description:
                      </h1>
                      {project.description}
                    </div>

                    <div className="ml-4 w-1/3 flex flex-col font-cd-regular dark:text-white">
                      <h1 className="text-sm mb-4 font-cd-semibold">
                        Tools Used:
                      </h1>
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
                        {project.Tools.map((tool: string, indexOne: number) => (
                          <span
                            className="text-xs text-start shrink"
                            key={indexOne}
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <span className="flex">
                    {
                      <Link href={project.githubLink}>
                        <a target="_blank">
                          <FaGithub className="text-xl mr-3 mt-3 dark:text-white" />
                        </a>
                      </Link>
                    }

                    {project.devpostLink ? (
                      <Link href={project.devpostLink}>
                        <a target="_blank">
                          <SiDevpost className="text-xl ml-3 mt-3 dark:text-white" />
                        </a>
                      </Link>
                    ) : null}

                    {project.websiteLink ? (
                      <Link href={project.websiteLink}>
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
  );
};

export default BestProjects;
