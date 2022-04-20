import React from "react";

const projectData = [
  {
    name: "LPM",
    id: "1",
    timeLine: "Dec 2020-Jan 2021",
    description: "",
    githubLink: "",
    websiteLink: "",
    Tools: ["React.js", "Vue.js", "Vercel", "Flask"],
  },

  {
    name: "LPM1",
    id: "2",
    timeLine: "Dec 2020-Jan 2021",
    description: "",
    githubLink: "",
    websiteLink: "",
    Tools: ["React.js", "Vue.js", "Vercel", "Flask"],
  },

  {
    name: "LPM2",
    id: "3",
    timeLine: "Dec 2020-Jan 2021",
    description: "",
    githubLink: "",
    websiteLink: "",
    Tools: ["React.js", "Vue.js", "Vercel", "Flask"],
  },
];

function Projects() {
  return (
    <div className="container mt-10 flex justify-between items-center mx-auto p-8 md:px-14 lg:px-24 w-full">
      <section className="w-full">
        <h2 id="work" className="text-4xl font-cd-bold">
          My work
        </h2>

        {projectData.map((project) => (
          <div key={project.id} className="flex flex-col gap-6 mt-6 font-cd-bold text-2xl">
            {project.name}
            {project.description}
            {project.githubLink}
          </div>
        ))}
      </section>
    </div>
  );
}

{
  /* <div className="flex flex-col items-center gap-6 mt-6">
<div className ="w-full bg-nav h-36 lg:h-72 object-cover">image</div>
<div className ="w-full bg-nav h-36 lg:h-72 object-cover">image</div>
<div className ="w-full bg-nav h-36 lg:h-72 object-cover">image</div>
<div className ="w-full bg-nav h-36 lg:h-72 object-cover">image</div>
<div className ="w-full bg-nav h-36 lg:h-72 object-cover">image</div>
<div className ="w-full bg-nav h-36 lg:h-72 object-cover">image</div>
<div className ="w-full bg-nav h-36 lg:h-72 object-cover">image</div>
<div className ="w-full bg-nav h-36 lg:h-72 object-cover">image</div>
<div className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover">random </div> */
}
export default Projects;
