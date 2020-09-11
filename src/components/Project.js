import React from 'react';
import './Project.css';

function Project({ title, language, image, link, details, css }) {
   return (
      <div data-aos="zoom-in" className="project-container">
         <div className="project-columns">
            <div className="project-info">
               <div className="project-title">{title}.</div>
               <div className="project-language">{language}.</div>
            </div>
            <div className="project-button">visit.</div>
         </div>
         <img src={image} alt="" className={css} />
      </div>
   );
}

export default Project;
