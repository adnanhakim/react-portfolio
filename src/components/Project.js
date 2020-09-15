import React, { useState } from 'react';
import './Project.css';

function Project({ key, title, language, image, link, details, css }) {
   const [classes, setClasses] = useState('project-back');

   const toggle = () => {
      if (classes === 'project-back') {
         setClasses('project-back view-details');
      } else setClasses('project-back');
   };

   return (
      <div data-aos="zoom-in" onClick={toggle} className="project-container">
         <div className="project-front">
            <div className="project-info">
               <div className="project-title">{title}.</div>
               <div className="project-language">{language}.</div>
            </div>
            <a
               href={link}
               title="View Project"
               target="_blank"
               rel="noopener noreferrer">
               <div className="project-button">visit.</div>
            </a>
         </div>
         <img src={image} alt="" className={css} />
         <div className={classes}>
            <div className="project-body">{details}</div>
            <a
               href={link}
               title="View Project"
               target="_blank"
               rel="noopener noreferrer">
               <div className="project-button">visit.</div>
            </a>
         </div>
      </div>
   );
}

export default Project;
