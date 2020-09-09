import React from 'react';
import './Home.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Home() {
   return (
      <div className="home-container">
         <div className="home">
            <div className="home-left">
               <div className="home-left-name">
                  <div className="home-left-first-name">adnan</div>
                  <div className="home-left-last-name">hakim.</div>
                  <div className="home-left-line"></div>
               </div>
               <div className="home-left-links">
                  <InstagramIcon />
                  <GitHubIcon />
                  <LinkedInIcon />
               </div>
            </div>
            <div className="home-right">
               <div className="home-right-introduction">- introduction</div>
               <div className="home-right-header">
                  android developer and full stack web developer, based in
                  mumbai.
               </div>
               <div className="home-right-text">
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
