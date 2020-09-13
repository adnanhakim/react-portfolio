import React from 'react';
import './Skill.css';

function Skill({ Icon, title }) {
   return (
      <div
         data-aos="zoom-out"
         data-aos-offset="200"
         className="skill-container">
         <div className="skill-padding">
            <Icon className="skill-icon" />
            {title}
         </div>
      </div>
   );
}

export default Skill;
