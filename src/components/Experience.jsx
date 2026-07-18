import { useState } from "react";
import resume from "../assets/Shreya_Mookherjee_Resume.pdf";
import { useIsVisible } from "../hooks/useIsVisible";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

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
  const { ref, opacity } = useIsVisible();

  function clickFwd() {
    setNumClicks((numClicks + 1) % EXPERIENCES.length);
  }

  function clickBwd() {
    setNumClicks(Math.abs(numClicks - 1) % EXPERIENCES.length);
  }

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="flex flex-col gap-4 pb-20 items-center justify-center"
    >
      <h2>
        <ScrambleText title={"EXPERIENCE"} />
      </h2>
      <p>this is a line about my experience</p>
      <motion.div
        whileHover={{ boxShadow: "0px 0px 20px var(--accent-bg)" }}
        className="experience flex px-4 py-10 rounded-lg"
      >
        <motion.button
          whileHover={{ scale: 1.1, color: "var(--accent)" }}
          className="self-center px-3 py-1 text-lg"
          onClick={clickBwd}
        >
          ◀
        </motion.button>
        <div className="self-center flex-1 max-w-160 px-7">
          <motion.h3
            whileHover={{ scale: 1.05, originX: 0, color: "var(--accent)" }}
          >
            {EXPERIENCES[numClicks].title}
          </motion.h3>
          <p className="pt-4"> {EXPERIENCES[numClicks].description}</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.1, color: "var(--accent)" }}
          className="self-center text-lg"
          onClick={clickFwd}
        >
          ▶
        </motion.button>
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px var(--accent-bg)" }}
        className="self-center border rounded-3xl px-5 py-3 mt-5"
      >
        <a href={resume} target="_blank">
          {" "}
          resume{" "}
        </a>
      </motion.div>
    </motion.div>
  );
}
