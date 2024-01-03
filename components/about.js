import Image from "next/image";
import picture from "../public/picture.png";

function About() {
  return (
    <div className="flex flex-col gap-10">
      <b className="text-xl">Bio</b>
      <div className="aboutContainer flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-4">
        <Image src={picture} className="rounded-lg"/>
        <div className="aboutTextContainer flex flex-col gap-3">
          <p>
            <span className="highlightText">Hey, I’m Prajwal Raju P </span>
            <span>
              I'm a software Engineer who specializes in building exceptional
              experiences.
            </span>
          </p>
          <p>I enjoy creating things and sharing my journey to the world.</p>
          <p>
            <span className="highlightText">I love dark mode</span>
            <span>
              , open source, and side projects. When I'm not working, I like
              hiking, playing with electronics, and playing guitar.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
