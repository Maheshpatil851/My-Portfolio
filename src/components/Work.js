// WorkExperience.js
import React from 'react';
import './Work.css'; // Import the CSS file for styling

function Work(props) {
  const { company, position,_location, period,duration, description } = props;

  return (
    <>
    <br /><br />
    <h1 class="stylish-h1">Work Experience</h1>
    <br />
    <section className="work" id="work">
      
    <div className="work-experience">
      <p className="company">{company}</p>
      <p >{_location}</p>
      <br />
      <p className="position">{position}</p>
      <p className="period">{period}</p>
      <p className="period">{duration}</p>
      <br />
      <p className="description">{description}</p>
      <br />
    </div>
   </section>
   </>
  );
}

export default Work;
