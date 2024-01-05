import Image from "next/image";
import picture from "../public/google.jpg";

function ProjectElement({ projectData, alignLeft = false }) {
  return (
    <div className="flex flex-col gap-2 ">
      <Image
        src={projectData.image}
        fill
        style={{ background: "var(--basic-text)" }}
        className="rounded-lg object-contain"
        alt="project background image"
      />
      <div className="projectDescription flex flex-col gap-4">
        <b>{projectData.title}</b>
        <p className="descText">{projectData.description}</p>
        <div className="techStack flex gap-2">
          {projectData.techStack.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <a href={projectData.link}>
          <Image
            className="logoIcon"
            alt=""
            width={30}
            height={30}
            src={
              projectData.linkOfGithub ? "/githubLogo.png" : "/externalLink.svg"
            }
          />
        </a>
      </div>
    </div>
  );
}

export default ProjectElement;
