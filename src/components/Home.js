import React from 'react';
import './Home.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Picture1 from '../Picture2.png';

function Home() {
   return (
      <div id="home" className="home-container section">
         <div className="home">
            <div className="home-left">
               <div className="home-left-name">
                  <div className="home-left-first-name">adnan</div>
                  <div className="home-left-last-name">hakim.</div>
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
               <img src={Picture1} alt="" />
            </div>
            <div className="home-right">
               <div className="header">- introduction</div>
               <div className="title">
                  android developer and full stack web developer, based in
                  mumbai.
               </div>
               <div className="body">
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus dolorum laborum vel assumenda quia commodi officia
                  illo facilis, corrupti blanditiis voluptas maiores amet?
                  Voluptates perferendis maiores itaque quos eius ex.
               </div>
            </div>
         </div>
      </div>
   );
}

export default Home;
