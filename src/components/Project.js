import React from 'react';
import './Project.css'
import news1 from './projectimg/newsapp/news1.JPG'
import news2 from './projectimg/newsapp/news2.JPG'
import news3 from './projectimg/newsapp/news3.JPG'

import note1 from './projectimg/noteapp/note1.JPG'
import note2 from './projectimg/noteapp/note2.JPG'
import note3 from './projectimg/noteapp/note3.JPG'
import note4 from './projectimg/noteapp/note4.JPG'
import note5 from './projectimg/noteapp/note5.JPG'

import rest1 from './projectimg/potoba/resto1.JPG'
import rest2 from './projectimg/potoba/resto2.JPG'
import rest3 from './projectimg/potoba/resto3.JPG'
import rest4 from './projectimg/potoba/resto4.JPG'
import rest5 from './projectimg/potoba/resto5.JPG'
import rest6 from './projectimg/potoba/resto6.JPG'
import rest7 from './projectimg/potoba/resto7.JPG'
import rest8 from './projectimg/potoba/resto8.JPG'
import rest9 from './projectimg/potoba/resto9.JPG'



import { useState } from 'react';




function Projects() {
  var _project = [
    {
      title: 'NewsApp',
      description: 'NewsApp is a dynamic and modern web application built with React, designed to keep users informed and up-to-date with the latest news from around the world. With a user-friendly interface and real-time updates, NewsApp provides a seamless news browsing experience.',
      techStack: ['React', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      // demoLink: 'https://example.com/demo1',
      githubLink: 'https://github.com/Maheshpatil851/NewsApi',
      image: news1,
      images: [news2, news3],
    },
    {
      title: 'I-Cloud-Notebook',
      description: 'NoteApp is a simple and user-friendly note-taking application developed using React. It offers a seamless and efficient way to create, edit, and manage your notes. This project is designed to help users keep track of their thoughts, tasks, and ideas, making it an essential tool for personal and professional use.',
      techStack: ['HTML', 'CSS', 'React', 'JavaScript', 'Node.js', 'Express,js', 'MongoDB'],
      // demoLink: 'https://example.com/demo2',
      githubLink: 'https://github.com/Maheshpatil851/i-cloud-notebook',
      image: note3,
      images: [note1, note2, note4, note5],
    },
    {
      title: 'POTOBA Restaurant ',
      description: `The Potoba Restaurant Website is a dynamic and user-friendly platform developed using React, designed to help users discover and explore restaurants in specific areas. Whether you're a local looking for nearby dining options or a visitor seeking culinary experiences, this project offers a convenient way to find restaurants based on your preferred location`,
      techStack: ['HTML', 'CSS', 'React', 'JavaScript', 'Node.js'],
      // demoLink: 'https://example.com/demo2',
      githubLink: 'https://github.com/Maheshpatil851/Reastaurant-',
      image: rest7,
      images: [rest2, rest3, rest4, rest5, rest6, rest1, rest8, rest9],
    },

  ];

  const [showImages, setShowImages] = useState(false);

  const toggleImages = () => {
    setShowImages((prevShowImages) => !prevShowImages);
  };

  return (
    <>
      <h1 class="stylish-h1">PROJECTS</h1>
      <section className="projects">
        {_project?.map((project, index) => {
          console.log(project);
          return (
            <div className="project-card" key={index}>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech-stack">
                  <p>Technologies used:</p>
                  <ul>
                    {project.techStack?.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  {/* <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Demo
                  </a> */}
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
                <br />
                <img src={project.image} alt={project.title} className="project-image" />
                <br />
                <br />
                <button type="button" className="btn btn-primary" onDoubleClick={toggleImages} style={{ marginLeft: '357px' }}>More Images</button>
                {/* <button onDoubleClick={toggleImages}>More Images</button> */}
                {/* <img src={project.image} alt={project.title} className="project-image" /> */}
                <div className={`image-container ${showImages ? 'expanded' : ''}`}>
                  {showImages && (
                    <div className="image-grid">
                      {project.images?.map((im, index) => (
                        <>
                          <img src={im} alt={project.title} className="project-image" key={index} />
                          <br />
                          <br />
                        </>

                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })};

      </section>
    </>
  );
}

export default Projects;
