import CompanyElement from "./companyElement";
import { useState } from "react";

import data from "../data/config.json";
import CompanyDetailsElement from "./companyDetailsElement";

function Experience() {
  const companyNamesList = Object.keys(data.companies);
  if (companyNamesList.length == 0) {
    return <></>;
  }

  const [companySelected, setCompanySelected] = useState(companyNamesList[0]);
  return (
    <div className="experienceContainer flex flex-col gap-10">
      <b className="text-xl">History</b>
      <div className="companyContainer flex flex-col gap-4">
        <div className="companyListContainer flex flex-row overflow-scroll gap-4 content-center whitespace-nowrap">
          {companyNamesList.map((companyName, index) => (
            <CompanyElement companyName={companyName} />
          ))}
        </div>
        <div
          className="companyDetails p-4 rounded-lg"
          style={{ background: "var(--background-grey)" }}
        >
          <CompanyDetailsElement
            companyDetails={data.companies[companySelected]}
          />
        </div>
        <div className="resumeConatiner flex gap-2 items-center">
          <b>View Full Resume</b>
          <img
                className="resumePointer w-2 h-fit "
                alt=""
                src="/pointer.png"
              />
        </div>
      </div>
    </div>
  );
}

export default Experience;
