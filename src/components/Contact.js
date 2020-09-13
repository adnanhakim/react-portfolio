import React from 'react';
import './Contact.css';

function Contact({ quote }) {
   return (
      <div className="contact-container">
         <div className="contact">
            <div className="contact-left">
               <div className="header">- Contact</div>
               <div className="title">any type of query and discussion.</div>
               <div className="button">
                  <a href="mailto:adnanhakim007@gmail.com">send an email.</a>
               </div>
            </div>
            <div className="contact-right">
               <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="100px"
                  height="70px"
                  viewBox="0 0 860.000000 587.000000"
                  preserveAspectRatio="xMidYMid meet">
                  <g
                     transform="translate(0.000000,587.000000) scale(0.100000,-0.100000)"
                     fill="#333647"
                     stroke="none">
                     <path
                        d="M3895 5464 c-11 -2 -81 -10 -155 -19 -1665 -199 -2828 -1014 -3266
                        -2290 -107 -310 -174 -673 -174 -945 -1 -744 447 -1413 1130 -1691 493 -200
                        1028 -180 1502 56 285 142 536 367 711 636 393 605 388 1398 -12 1994 -275
                        409 -703 690 -1191 782 -183 34 -497 28 -679 -13 -35 -8 -66 -13 -68 -10 -2 2
                        24 39 59 82 334 421 933 764 1663 955 146 37 353 81 465 97 l55 7 0 179 c0
                        112 -4 180 -10 181 -5 1 -19 1 -30 -1z"
                     />
                     <path
                        d="M8200 5459 c-645 -76 -1207 -228 -1675 -453 -921 -442 -1542 -1192
                        -1775 -2146 -113 -466 -112 -867 5 -1228 46 -139 157 -362 242 -482 88 -124
                        310 -346 433 -432 421 -297 948 -403 1449 -292 654 146 1182 650 1356 1297
                        128 473 58 990 -190 1402 -285 473 -756 788 -1300 870 -183 27 -458 17 -639
                        -24 -27 -7 -50 -10 -52 -8 -8 8 143 182 242 277 342 330 858 596 1474 759 136
                        36 381 87 468 97 l62 7 0 183 c0 141 -3 184 -12 183 -7 -1 -47 -6 -88 -10z"
                     />
                  </g>
               </svg>
               <span className="title">{quote}</span>
            </div>
         </div>
      </div>
   );
}

export default Contact;
