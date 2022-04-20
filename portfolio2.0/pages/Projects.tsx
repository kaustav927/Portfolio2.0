import React from "react";
import {FaGithub} from 'react-icons/fa';
import {SiDevpost} from 'react-icons/si';
import Link from 'next/link'
const projectData = [
  {
    name: "LPM",
    id: "1",
    timeLine: "Dec 2020-Jan 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    githubLink: "https://github.com/kaustav927/LoanPredictionModel",
    devpostLink: "https://devpost.com/software/ml-in-ml",
    websiteLink: "https://loan-prediction-model-kaustav927.vercel.app/",
    Tools: ["React.js", "Vue.js", "Vercel", "Flask"],
  },

  {
    name: "QnA Space",
    id: "2",
    timeLine: "Dec 2020-Jan 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    githubLink: "https://github.com/prabh124/qna-space",
    devpostLink: "https://devpost.com/software/qna-space",
    websiteLink: "",
    Tools: ["React.js", "Vue.js", "Vercel", "Flask"],
  },

  {
    name: "PassKey",
    id: "3",
    timeLine: "Dec 2020-Jan 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    githubLink: "https://github.com/kaustav927/PassKey",
    websiteLink: "",
    Tools: ["React.js", "Vue.js", "Vercel", "Flask"],
  },
  {
    name: "NFT Market Place",
    id: "4",
    timeLine: "Dec 2020-Jan 2021",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
    githubLink: "",
    websiteLink: "",
    Tools: ["React.js", "Vue.js", "Vercel", "Flask"],
  },
];

function Projects() {
  return (
    <div className="container mt-10 flex justify-between items-center mx-auto p-8 md:px-14 lg:px-24 w-full h-full">
      <section className="w-full">
        <h2 id="work" className="text-4xl font-cd-bold">
          My work
        </h2>

        {projectData.map((project) => (
          <div key={project.id} className="flex flex-col gap-6 mt-6 py-4">
            <div className="text-2xl font-cd-bold">{project.name}</div>
            <div className="w-2/3 text-xl font-cd-regular">{project.description}</div>
              <span className="flex">
                {
                <Link href={project.githubLink}>
                    <a target="_blank">
                        <FaGithub className="text-2xl mr-3"/>
                    </a>
                </Link>
                } 

                { project.devpostLink ? (
                <Link href={project.devpostLink}>
                    <a target="_blank">
                        <SiDevpost className="text-2xl ml-3"/>
                    </a>
                </Link>
                ) : null
                }
              </span>
            </div>
        ))}
      </section>
    </div>
  );
}


export default Projects;
