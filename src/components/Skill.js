import React from 'react';
import './Skill.css';

function Skill({ Icon, title }) {
   return (
      <div className="skill-container">
         <div className="skill-padding">
            <Icon className="skill-icon" />
            {title}
         </div>
      </div>
   );
}

export default Skill;
