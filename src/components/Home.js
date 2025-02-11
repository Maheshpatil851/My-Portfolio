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
            <Work />
       
            <Education />
            <Projects />
            <Contact />
            <Footer />

        </div>
    )
}
