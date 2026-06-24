import logoImg from "../assets/logo-temp.png";

const TABS = ["home", "about", "experience", "projects", "art"];

export default function NavBar() {
  return (
    <nav className="navbar flex sticky top-0">
      <ul className="flex gap-4 list-none p-6 items-center">
        <a href={`#home`}>
          <img className="w-8 h-8" src={logoImg} />
        </a>
      </ul>
      <ul className="flex ml-auto gap-4 list-none p-6 items-center">
        {TABS.map((tab, index) => (
          <li key={index}>
            <a href={`#${tab}`}> / {tab}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
