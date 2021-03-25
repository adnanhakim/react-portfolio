import React from 'react';
import './Home.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Home({ homeTitle, homeBody, image }) {
   return (
      <div id="home" className="home-container section">
         <div className="home">
            <div className="home-left">
               <div className="home-left-name">
                  <h2 className="home-left-first-name">adnan</h2>
                  <h2 className="home-left-last-name">hakim.</h2>
                  <div className="home-left-line"></div>
               </div>
               <div className="home-left-links">
                  <a
                     href="https://www.instagram.com/ad.nxn/"
                     title="Follow me on Instagram"
                     target="_blank"
                     rel="noopener noreferrer">
                     <InstagramIcon className="home-left-link" />
                  </a>
                  <a
                     href="https://github.com/adnanhakim"
                     title="See my projects on GitHub"
                     target="_blank"
                     rel="noopener noreferrer">
                     <GitHubIcon className="home-left-link" />
                  </a>
                  <a
                     href="https://www.linkedin.com/in/adnanhakim/"
                     title="Follow me on LinkedIn"
                     target="_blank"
                     rel="noopener noreferrer">
                     <LinkedInIcon className="home-left-link" />
                  </a>
               </div>
               <img src={image} alt="" />
            </div>
            <div className="home-right">
               <p className="header">- introduction</p>
               <h3 className="title">{homeTitle}</h3>
               <p className="body">{homeBody}</p>
            </div>
         </div>
      </div>
   );
}

export default Home;
