import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import Link from "next/link";
import { ProjectData } from "../components/ProjectData";
import { FiPlus, FiMinus } from "react-icons/fi";

const CurrentProjects = () => {
  interface selectedData {
    index: number | null | any;
  }
  const projectData = ProjectData;
  const [selected, setSelected] = useState<selectedData | any | null>(null);

  const toggle = (index: number) => {
    selected === index ? setSelected(null) : setSelected(index);
  };

  return (
    <div className="container mt-10 flex justify-between items-center w-10/12 mx-auto px md:px-14 lg:px-24 h-full">
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
                  <div className="w-2/3 text-sm font-cd-regular dark:text-white">
                    {project.description}
                  </div>
                  <span className="flex">
                    {
                      <Link href={project.githubLink}>
                        <a target="_blank">
                          <FaGithub className="text-2xl mr-3 mt-3 dark:text-white" />
                        </a>
                      </Link>
                    }

                    {project.devpostLink ? (
                      <Link href={project.devpostLink}>
                        <a target="_blank">
                          <SiDevpost className="text-2xl ml-3 mt-3 dark:text-white" />
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

export default CurrentProjects;
