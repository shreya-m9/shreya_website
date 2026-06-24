import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Art from "./components/Art";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col snap-y snap-proximity scroll-smooth w-full h-screen overflow-y-scroll">
      <NavBar />
      <div
        id="home"
        className="flex pl-10 pt-100 justify-end h-screen snap-start snap-normal shrink-0 pt-20"
      >
        <Home />
      </div>
      <div
        id="about"
        className="flex items-center justify-center overflow-hidden h-screen snap-start snap-normal shrink-0 pt-35"
      >
        <About />
      </div>
      <div
        id="experience"
        className="flex items-center justify-center flex h-screen snap-start snap-normal shrink-0 pt-40"
      >
        <Experience />
      </div>
      <div
        id="projects"
        className="flex items-center justify-center h-screen snap-start snap-normal shrink-0 pt-40"
      >
        <Projects />
      </div>
      <div
        id="art"
        className="flex items-center justify-center h-screen snap-start snap-normal shrink-0 pt-20"
      >
        <Art />
      </div>
    </div>
  );
}

export default App;
