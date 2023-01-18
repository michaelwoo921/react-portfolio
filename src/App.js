import './App.css';
import React from 'react'

import Header from './Header/Header';
import SkillMatrix from './SkillMatrix/SkillMatrix';
import IndustryEquivalency from './IndustryEquivalency/IndustryEquivalency';
import About from './AboutMe/About';
import Education from './Education/Education.js'
import Project from './Projects/Project.js'

function App() {
  return (
    <div className="container" >   
      <Header />
      <IndustryEquivalency />
      <About />
      <Education />
      <SkillMatrix />
      <Project />
    </div>
  );

}

export default App;
