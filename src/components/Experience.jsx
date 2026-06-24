import { useState } from "react";
import resume from "../assets/Shreya_Mookherjee_Resume.pdf";

const EXPERIENCES = [
  {
    company: "generate product studio",
    title: "data scientist for stridetrack",
    description:
      "worked with people to create smth cool more text here to see how it will work with the wrapping this is just an example keep making the description longer just to see blah blah blah",
  },
  {
    company: "nurover",
    title: "life detection researcher",
    description: "life detection stuff",
  },
  {
    company: "stemout",
    title: "volunteer",
    description: "curriculum creation + stem outreach",
  },
];

export default function Experience() {
  const [numClicks, setNumClicks] = useState(0);

  function clickFwd() {
    setNumClicks((numClicks + 1) % EXPERIENCES.length);
  }

  function clickBwd() {
    setNumClicks(Math.abs(numClicks - 1) % EXPERIENCES.length);
  }

  return (
    <div className="flex flex-col gap-4 pb-20 items-center justify-center">
      <h2>experience</h2>
      <p>this is a line about my experience</p>
      <div className="experience flex px-4 py-10 border rounded-lg">
        <button className="self-center px-3 py-1 text-lg" onClick={clickBwd}>
          ◀
        </button>
        <div className="self-center flex-1 max-w-160 px-7">
          <h3>{EXPERIENCES[numClicks].title}</h3>
          <p className="pt-4"> {EXPERIENCES[numClicks].description}</p>
        </div>
        <button className="self-center text-lg" onClick={clickFwd}>
          ▶
        </button>
      </div>
      <div className="self-center border rounded-3xl px-5 py-3 mt-5">
        <a href={resume} target="_blank">
          {" "}
          resume{" "}
        </a>
      </div>
    </div>
  );
}
