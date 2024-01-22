import { useState } from "react";
import Intro from "./components/Intro";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="app flex flex-col items-center">
      <Intro />
      <About />
      <Projects />
      <Education />
    </div>
  );
}

export default App;
