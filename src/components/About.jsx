import headshotImg from "../assets/headshot-2-temp.jpeg";

import githubImg from "../assets/github-dark-mode.png";
import linkedinImg from "../assets/linkedin-dark.png";
import emailImg from "../assets/email-dark.png";

const SOCIALS = [
  {
    image: githubImg,
    link: "https://github.com/shreya-m9",
  },
  {
    image: linkedinImg,
    link: "https://www.linkedin.com/in/shreya-mookherjee-131013389/",
  },
  {
    image: emailImg,
    link: "mailto:shreyamookherjee(@gmail.com",
  },
];

export default function About() {
  return (
    <div className="flex pb-20 gap-4 text-right">
      <div className="flex flex-col pl-4 max-w-md">
        <h2> about me </h2>
        <p>
          {" "}
          some text about me if i write more will it go to another line and how
          long will this go on for ol can i stop writing now idk what else to
          say i just need to make this long enough to see what will happen
        </p>
        <h3 className="mt-4">skills</h3>
        <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 w-fit ml-auto">
          <li> ★ skill1</li>
          <li> ★ skill2</li>
          <li> ★ skill3</li>
          <li> ★ skill4</li>
        </ul>
        <ul className="flex flex-row list-none mt-4 gap-4 justify-end">
          {SOCIALS.map((social, index) => (
            <li key={index}>
              <a href={social.link}>
                <img src={social.image} className="w-8 h-8" />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <img src={headshotImg} className="w-75 h-75 object-cover" />
    </div>
  );
}
