import React, { useState } from 'react';
import './Project.css';
import DOMPurify from 'dompurify';

function Project({ title, language, image, link, details, css, buttonText }) {
   const [viewDetails, setViewDetails] = useState(false);

   function createMarkup(html) {
      return {
         __html: DOMPurify.sanitize(html),
      };
   }

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
               view.
            </button>
         </div>

         <img src={image} alt="" className={css} />

         <div className={`project-back ${viewDetails ? 'view-details' : ''}`}>
            <p
               className="project-body"
               dangerouslySetInnerHTML={createMarkup(details)}></p>
            <button
               className={`project-button ${viewDetails && 'show-button'}`}
               title="View Project"
               onClick={(e) => openBackLink(e)}>
               {buttonText}.
            </button>
         </div>
      </div>
   );
}

export default Project;
