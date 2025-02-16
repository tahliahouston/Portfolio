import React from 'react';
import Intro from './components/Intro';
import "./styles/Global.css";
import About from './components/About';
import Experience from './components/Experience';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Credits from './components/Credit';
import SplashCursor from './components/SplashCursor';

function App() {
  return (
    <div>
      <SplashCursor />
      <NavBar />
      <div id="intro">
        <Intro />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <Credits />
    </div>
  );
}

export default App;