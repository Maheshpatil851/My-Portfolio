import React from 'react'
import Header from './Header';
import About from './About';
import Projects from './Project';
import Education from './Education';
import Skills from './skills';
import Footer from './Footer';
import Contact from './Contact';
import Work from './Work';

export default function Home() {
    return (
        <div style={{backgroundColor: '#f7f7f7'}}>
           
            <Header />
            <About />
            <Skills />
            <Work 
        company="Keyword Software Solution"
        _location="Nashik"
        position="Intern as a Frontend Developer"
        period="Oct 2022 - April 2023"
        duration="6 month"
        description="Designed and developed user-friendly interfaces for client websites."
      />
            <Education />
            <Projects />
            <Contact />
            <Footer />

        </div>
    )
}
