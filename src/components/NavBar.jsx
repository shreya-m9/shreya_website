import logoImg from "../assets/logo-temp.png";
import { motion } from "framer-motion";

const TABS = ["home", "about", "experience", "projects", "art"];

export default function NavBar() {
  return (
    <nav className="navbar flex sticky top-0">
      <ul className="flex gap-4 list-none p-6 items-center">
        <a href={`#home`}>
          <img className="w-8 h-8" src={logoImg} />
        </a>
      </ul>
      <motion.ul
        className="flex ml-auto gap-4 list-none p-6 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1.5 }}
      >
        {TABS.map((tab, index) => (
          <li key={index}>
            <motion.a whileHover={{ color: "var(--accent)" }} href={`#${tab}`}>
              {" "}
              / {tab}
            </motion.a>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
}
