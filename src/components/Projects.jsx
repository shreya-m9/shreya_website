import { useState } from "react";
import ProjectTab from "./ProjectTab";
import githubImg from "../assets/github-dark-mode.png";
import tempPic from "../assets/headshot-2-temp.jpeg";

const PROJECTS = {
  proj1: {
    title: "website",
    description:
      "this is my website and here is a bit more about it to make it go onto more lines to see what it will do with the image i hope this reaches and looks ok... nope need to still keep going please let this be over i don't really feel like typing anymore and i think this looks ugly right now so i'd rather not has it still not reached or is the image doing smoething weird i don't really know but i hope this next line reaches the image so i know what it will look like",
    github: "link",
    site: "link",
    img: tempPic,
  },
  proj2: {
    title: "hackathon",
    description: "project for hackathon",
    github: "link",
  },
};

export default function Projects() {
  const [content, setContent] = useState("proj1");

  function handleSelect(selectedButton) {
    setContent(selectedButton);
  }

  return (
    <div className="pb-10">
      <h2 className="flex justify-center pb-4">projects</h2>
      <div className="flex border w-full min-w-200 min-h-70 max-w-4xl rounded mb-20">
        <div className="flex flex-col">
          {Object.entries(PROJECTS).map(([key, value]) => (
            <div key={key}>
              <ProjectTab
                onSelect={() => handleSelect(key)}
                title={value.title}
              />
            </div>
          ))}
        </div>
        <div className="relative flex-1 border rounded">
          <div className="absolute bottom-4 right-4 flex gap-2">
            <a href={PROJECTS[content].github}>
              <img className="w-6 h-6" src={githubImg} />
            </a>
            {PROJECTS[content].site && (
              <a href={PROJECTS[content].site}>
                <img className="w-6 h-6" src={githubImg} />
              </a>
            )}
          </div>
          <div className="mt-4 px-4 py-4 mb-4">
            <h3>{PROJECTS[content].title}</h3>
            <p className="pt-4">{PROJECTS[content].description}</p>
            <div className="flex justify-center px-4 pt-5">
              {PROJECTS[content].img && (
                <img
                  className="w-100 h-60 object-cover rounded inline"
                  src={PROJECTS[content].img}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
