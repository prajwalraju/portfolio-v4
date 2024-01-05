import Image from "next/image"

function CompanyDetailsElement({companyDetails}) {
  return (
    <div className="companyDetailsContainer flex flex-col gap-4">
        <b>{companyDetails.designation}</b>
        <div>
        <span className="companyName">{companyDetails.name}</span>
          <span> • </span>
          <span className="companyLocation">{companyDetails.location}</span>
        </div>
        <div>
          <span className="timeLine">April 2021 - Present</span>
          <span> • </span>
          <span className="duration">2 yr 5 mos</span>
        </div>
        <div className="techStack flex gap-2">
          {companyDetails.techStack.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <div className="descriptionContainer flex flex-col gap-4">
          {companyDetails.descriptions.map((description, index) => (
            <div className="description flex gap-2" key={index}>
              <img
                className="descriptionPointer w-4 h-fit"
                alt=""
                src="/pointer.png"
              />
              <p className="descriptionText">{description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default CompanyDetailsElement