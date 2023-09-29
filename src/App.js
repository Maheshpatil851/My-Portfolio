import React from 'react';


import Home from './components/Home';
import About from './components/About';
import Projects from './components/Project';
import Education from './components/Education';
import Navbars from './components/Navbars';
import Skills from './components/skills';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";





function App() {
  return (
    
      <div className="app">
      <BrowserRouter>
      <Navbars />
      <Routes>
        
          <Route exact path="/" index element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/skills" element={<Skills />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/project" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          
        
      </Routes>
    </BrowserRouter>
      {/* <Navbars />
      <Header />
      <Skills /> */}
      {/* <Slider /> */}
      {/* <Education />
      <Projects /> */}
      {/* <Footer /> */}
      
    
    </div>
  
  );
}

export default App;
