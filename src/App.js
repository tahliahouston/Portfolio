import React from 'react';
import Intro from './components/Intro';
import "./styles/Global.css";
import About from './components/About';
import Experience from './components/Experience';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;