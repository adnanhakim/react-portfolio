import React from 'react';
import './Navbar.css';
import { animateScroll, scroller } from 'react-scroll';

function Navbar() {
   const toggleNavbar = () => {
      document.getElementById('navbar-links').classList.toggle('navbar-active');
      document.getElementById('hamburger').classList.toggle('toggle');
   };

   const closeNavbar = () => {
      if (
         document
            .getElementById('navbar-links')
            .classList.contains('navbar-active')
      ) {
         document
            .getElementById('navbar-links')
            .classList.remove('navbar-active');
         document.getElementById('hamburger').classList.toggle('toggle');
      }
   };

   return (
      <div className="navbar-container">
         <div className="navbar">
            <div className="navbar-logo"></div>
            <div id="hamburger" className="hamburger" onClick={toggleNavbar}>
               <div className="line1"></div>
               <div className="line2"></div>
               <div className="line3"></div>
            </div>
            <ul id="navbar-links" className="navbar-links">
               <li
                  id="home-link"
                  onClick={() => {
                     animateScroll.scrollToTop({
                        duration: 1500,
                        smooth: true,
                     });
                     closeNavbar();
                  }}>
                  Home
               </li>
               <li
                  id="projects-link"
                  onClick={() => {
                     scroller.scrollTo('projects', {
                        duration: 1500,
                        smooth: true,
                        offset: -100,
                     });
                     closeNavbar();
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
                     closeNavbar();
                  }}>
                  Contact
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Navbar;
