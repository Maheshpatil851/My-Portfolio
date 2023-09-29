import React, { useState } from 'react';
import './Education.css';
;


function Education() {
  const [education] = useState([
    {
      id: 1,
      institution: 'Shri Shivaji Highschool Bodhegaon',
      degree: 'SSC',
      year: '2016 - 2017',
      percentage: '89.60%',
    },
    {
      id: 2,
      institution: 'New Art Commerce And Science College Shevgaon ',
      degree: 'HSC',
      year: '2017 - 2019',
      percentage: '71.85%',
    },
    {
      id: 3,
      institution: 'Amruthvahini College Of Engineering Sangamner',
      degree: 'BE(Information Technology)',
      year: '2019 - 2023',
      percentage: '87%',
    },
    // Add more education entries
  ]);

    
    
 

  return (
    <section className="education" id="education">
      <h1 class="stylish-h1">EDUCATION</h1>
      <div className="education-list">
        {education?.map((edu) => (
          <div className="education-item" key={edu.id}>
            <h3>{edu.degree}</h3>
            <p className="year">{edu.year}</p>
            <p className="institution">{edu.institution}</p>
            <p className="percentage">Percentage = {edu.percentage}</p>
          </div>
          
          
        ))}
      </div>


      
    </section>
  );
}

export default Education;
