import React from 'react';
import './Navbar.css';
import { animateScroll, scroller } from 'react-scroll';

function Navbar() {
   return (
      <div className="navbar-container">
         <div className="navbar">
            <div className="navbar-logo"></div>
            <ul className="navbar-links">
               <li
                  id="home-link"
                  onClick={() => {
                     animateScroll.scrollToTop({
                        duration: 1500,
                        smooth: true,
                     });
                  }}>
                  Home
               </li>
               <li
                  id="projects-link"
                  onClick={() => {
                     scroller.scrollTo('projects', {
                        duration: 1500,
                        smooth: true,
                        offset: -150,
                     });
                  }}>
                  Projects
               </li>
               <li
                  id="contact-link"
                  onClick={() => {
                     scroller.scrollTo('contact', {
                        duration: 1500,
                        smooth: true,
                     });
                  }}>
                  Contact
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Navbar;
