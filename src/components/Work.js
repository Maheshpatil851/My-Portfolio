import React from 'react';
import './Work.css'; // Import the CSS file for styling

function Work() {
  // Array of work experiences
  const workExperiences = [
    {
      company: "Keyword Software Solution",
      _location: "Nashik",
      position: "Intern as a Frontend Developer",
      period: "Oct 2022 - April 2023",
      duration: "6 months",
      description: "Designed and developed user-friendly interfaces for client websites."
    },
    {
      company: "SportzFirst",
      _location: "Worli Mumbai",
      position: "Dot Net Full Stack Developer",
      period: "Oct 2023 - Present",
      duration: "+1.5 years",
      description: "Full-Stack Development: Led the development of critical web APIs using .NET Framework and MongoDB, including designing database structures, defining collection relationships, and implementing schemas to meet business requirements. API Development & Integration: Developed and maintained robust APIs, integrating them with frontend interfaces built in Vue.js, ensuring seamless communication between backend services and the user interface. Team Leadership & Problem Solving: Acted as the lead backend developer, overseeing the development and delivery of microservices, resolving complex bugs, and ensuring high-quality production database queries through comprehensive testing and efficient problem-solving."
    }
  ];

  return (
    <>
    <br /><br />
    <h1 className="stylish-h1">Work Experience</h1>
    <br />
    <section className="work" id="work">
      {workExperiences.map((experience, index) => (
        <div key={index} className="work-experience">
          <p className="company">{experience.company}</p>
          <p>{experience._location}</p>
          <br />
          <p className="position">{experience.position}</p>
          <p className="period">{experience.period}</p>
          <p className="duration">{experience.duration}</p>
          <br />
          <p className="description">{experience.description}</p>
          <br />
        </div>
      ))}
    </section>
  </>
  );
}

export default Work;
