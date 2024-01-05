import data from "../data/config.json";
import ProjectElement from "./projectElement";

function Projects() {
  const projectsNameList = Object.keys(data.featuredProjects);
  if (projectsNameList.length == 0) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-10">
      <b className="text-xl">What I MAKE</b>
      <div className="flex flex-col gap-10">
        {projectsNameList.map((projectName, index) => (
          <ProjectElement projectData={data.featuredProjects[projectName]} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default Projects;
