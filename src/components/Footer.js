import React from 'react';
import './Footer.css';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

function Footer() {
   return (
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
                     Ducimus dolorum laborum vel assumenda quia commodi officia
                     illo facilis, corrupti blanditiis voluptas maiores amet?
                     Voluptates perferendis maiores itaque quos eius ex.
                  </div>
                  <div className="button">
                     <a href="mailto:adnanhakim007@gmail.com">send an email.</a>
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
                     <div className="achievement">
                        <div className="achievement-name">
                           Lorem ipsum dolor sit amet consectetur, adipisicing
                           elit. Sit, odit veniam et praesentium velit officia
                           assumenda consequatur provident eveniet rerum magni
                           ad quod delectus quae ex, accusantium ratione dolorem
                           veritatis?
                        </div>
                        <ArrowRightAltIcon className="button" />
                     </div>
                     <div className="achievement">
                        <div className="achievement-name">avishkar</div>
                        <ArrowRightAltIcon className="button" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-bottom">Bottom</div>
         </div>
      </div>
   );
}

export default Footer;
