import React, { useState } from 'react';
import './Project.css';

function Project({ title, language, image, link, details, css }) {
   const [viewDetails, setViewDetails] = useState(false);

   function openFrontLink(e) {
      e.stopPropagation();

      if (!viewDetails) window.open(link, '_blank');
   }

   function openBackLink(e) {
      e.stopPropagation();

      if (viewDetails) window.open(link, '_blank');
   }

   return (
      <div
         data-aos="zoom-in"
         onClick={() => setViewDetails(!viewDetails)}
         className="project-container">
         <div className="project-front">
            <div className="project-info">
               <h3 className="project-title">{title}.</h3>
               <p className="project-language">{language}.</p>
            </div>
            <button
               className={`project-button ${!viewDetails && 'show-button'}`}
               title="View Project"
               onClick={(e) => openFrontLink(e)}>
               visit.
            </button>
         </div>

         <img src={image} alt="" className={css} />

         <div className={`project-back ${viewDetails ? 'view-details' : ''}`}>
            <div className="project-body">{details}</div>
            <button
               className={`project-button ${viewDetails && 'show-button'}`}
               title="View Project"
               onClick={(e) => openBackLink(e)}>
               visit.
            </button>
         </div>
      </div>
   );
}

export default Project;
