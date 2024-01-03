"use client";
import About from "@/components/about";
import ContactMe from "@/components/contactMe";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import NavBar from "@/components/navBar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className=" container flex flex-col p-3">
      <style jsx>{`
        .heroSection > * {
          flex: 1;
        }
      `}</style>
      <div className="heroSection flex flex-col h-screen">
        <NavBar />
        <Hero />
      </div>
      <div className="contentContainer flex flex-col gap-8 content-center justify-center w-full">
        <About />
        <Experience />
        <Skills />
        <Projects />
      </div>
      <ContactMe />
    </main>
  );
}
