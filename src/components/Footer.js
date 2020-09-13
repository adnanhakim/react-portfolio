import React, { useState, useEffect } from 'react';
import './Footer.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Element } from 'react-scroll';
import { db } from '../firebase';

function Footer() {
   const [achievements, setAchievements] = useState([]);

   useEffect(() => {
      async function fetchAchievements() {
         const snapshot = await db.collection('achievements').get();

         if (snapshot.empty) {
            console.log('No achievements');
         } else {
            let achievements = [];

            // Store in array
            snapshot.forEach((doc) => {
               const data = doc.data();
               if (data.hide == null) {
                  achievements.push({
                     key: doc.id,
                     name: data.name,
                     order: data.order,
                     link: data.link,
                  });
               }
            });

            // Sort by order
            achievements.sort((a, b) => a.order - b.order);
            setAchievements(achievements);
         }
      }

      fetchAchievements();
   }, []);

   return (
      <Element name="contact">
         <div className="footer-container">
            <div className="footer">
               <div className="footer-top">
                  <div className="footer-left">
                     <div className="title">
                        got a project? <br />
                        let's talk.
                     </div>
                     <div className="body">
                        lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ducimus dolorum laborum vel assumenda quia commodi
                        officia illo facilis, corrupti blanditiis voluptas
                        maiores amet? Voluptates perferendis maiores itaque quos
                        eius ex.
                     </div>
                     <div className="button">
                        <a href="mailto:adnanhakim007@gmail.com">
                           send an email.
                        </a>
                        <span>&nbsp; or &nbsp;</span>
                        <a href="mailto:adnanhakim007@gmail.com">
                           check out my resume.
                        </a>
                     </div>
                  </div>
                  <div className="footer-right">
                     <div className="header">- achievements</div>
                     <div className="title">some of my achievements</div>
                     <div className="achievements-container">
                        {achievements.map((achievement) => (
                           <div className="achievement">
                              <div className="achievement-name">
                                 {achievement.name}
                              </div>
                              <ArrowRightAltIcon className="button" />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
               <div className="footer-bottom">
                  <div className="footer-message">
                     Thanks for scrolling,
                     <span className="light-text"> that's all folks.</span>
                  </div>
                  <div className="footer-links">
                     <a
                        href="https://www.instagram.com/ad.nxn/"
                        title="Follow me on Instagram"
                        target="_blank"
                        rel="noopener noreferrer">
                        <InstagramIcon className="footer-link" />
                     </a>
                     <a
                        href="https://github.com/adnanhakim"
                        title="See my projects on GitHub"
                        target="_blank"
                        rel="noopener noreferrer">
                        <GitHubIcon className="footer-link" />
                     </a>
                     <a
                        href="https://www.linkedin.com/in/adnanhakim/"
                        title="Follow me on LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer">
                        <LinkedInIcon className="footer-link" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </Element>
   );
}

export default Footer;
