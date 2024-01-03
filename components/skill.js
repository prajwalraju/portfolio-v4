import React from "react";

function Skill({ skill, selected = false }) {
    console.log("skill", skill)
  return (
    <div className="flex gap-4 items-center">
      <div className="line w-10 h-1" style={{'background':'var(--basic-text)'}} />
      <p>{skill}</p>
    </div>
  );
}

export default Skill;
