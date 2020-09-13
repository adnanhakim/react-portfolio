import React from 'react';
import './Navbar.css';
import { animateScroll, scroller } from 'react-scroll';

function Navbar() {
   const selectHome = () => {
      document.getElementById('home-link').classList.add('selected');
      document.getElementById('projects-link').classList.remove('selected');
      document.getElementById('contact-link').classList.remove('selected');
      animateScroll.scrollToTop({
         duration: 1500,
         smooth: true,
      });
   };

   const selectProjects = () => {
      document.getElementById('home-link').classList.remove('selected');
      document.getElementById('projects-link').classList.add('selected');
      document.getElementById('contact-link').classList.remove('selected');
      scroller.scrollTo('projects', {
         duration: 1500,
         smooth: true,
         offset: -150,
      });
   };

   const selectContact = () => {
      document.getElementById('home-link').classList.remove('selected');
      document.getElementById('projects-link').classList.remove('selected');
      document.getElementById('contact-link').classList.add('selected');
      scroller.scrollTo('contact', {
         duration: 1500,
         smooth: true,
      });
   };

   return (
      <div className="navbar-container">
         <div className="navbar">
            <div className="navbar-logo"></div>
            <ul className="navbar-links">
               <li id="home-link" onClick={selectHome} className="selected">
                  Home<div className="point"></div>
               </li>
               <li id="projects-link" onClick={selectProjects}>
                  Projects<div className="point"></div>
               </li>
               <li id="contact-link" onClick={selectContact}>
                  Contact<div className="point"></div>
               </li>
            </ul>
         </div>
      </div>
   );
}

export default Navbar;
