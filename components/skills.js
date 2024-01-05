import Skill from "./skill";

import data from "../data/config.json";

function Skills() {
  return (
    <div className="flex flex-col gap-10">
      <b className="text-xl">What I Do</b>
      <div className="flex flex-col gap-4">
        {data.skills.map((skill, index) => (
          <Skill skill={skill} key={index}/>
        ))}
      </div>
    </div>
  );
}

export default Skills;
