import headshotImg from "../assets/headshot-2-temp.jpeg";
import { FaStar, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { useIsVisible } from "../hooks/useIsVisible";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";

const SOCIALS = [
  {
    image: FaGithub,
    link: "https://github.com/shreya-m9",
  },
  {
    image: FaLinkedin,
    link: "https://www.linkedin.com/in/shreya-mookherjee-131013389/",
  },
  {
    image: Mail,
    link: "mailto:shreyamookherjee(@gmail.com",
  },
];

const SKILLS = ["skill1", "skill2", "skill3", "skill4"];

export default function About() {
  const { ref, opacity } = useIsVisible();

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className="flex pb-20 gap-4 text-right"
    >
      <div className="flex flex-col pl-4 max-w-md">
        <h2>
          {" "}
          <ScrambleText title={"ABOUT ME"} />
        </h2>
        <p>
          {" "}
          some text about me if i write more will it go to another line and how
          long will this go on for ol can i stop writing now idk what else to
          say i just need to make this long enough to see what will happen
        </p>
        <h3 className="mt-4">skills</h3>
        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 w-fit ml-auto">
          {SKILLS.map((skill) => (
            <motion.li
              whileHover={{ scale: 1.1, color: "var(--accent)" }}
              className="flex items-center gap-1"
            >
              {" "}
              <FaStar className="w-2 h-2" /> {skill}
            </motion.li>
          ))}
        </ul>
        <ul className="flex flex-row list-none mt-4 gap-4 justify-end">
          {SOCIALS.map((social, index) => {
            const Icon = social.image;
            return (
              <li key={index}>
                <a href={social.link}>
                  <motion.div
                    whileHover={{ scale: 1.1, color: "var(--accent)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <motion.img
        whileHover={{
          x: 10,
          y: -10,
          boxShadow: "-8px 8px 20px var(--accent)",
        }}
        src={headshotImg}
        className="w-75 h-75 object-cover"
      />
    </motion.div>
  );
}
