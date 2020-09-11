import React, { useState, useEffect } from 'react';
import './Projects.css';
import Skill from './Skill';
import AndroidIcon from '@material-ui/icons/Android';
import WebIcon from '@material-ui/icons/Web';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import { db } from '../firebase';

function Projects() {
   const [languages, setLanguages] = useState([]);

   useEffect(() => {
      async function fetchLanguages() {
         const languagesRef = db.collection('languages');
         const snapshot = await languagesRef.get();
         if (snapshot.empty) {
            console.log('No languages');
         } else {
            let languages = [];
            snapshot.forEach((doc) => {
               const data = doc.data();
               languages.push({
                  key: doc.id,
                  name: data.name,
                  url: data.url,
               });
            });
            setLanguages(languages);
         }
      }
      fetchLanguages();
   }, []);

   return (
      <div className="projects-container">
         <div className="skills">
            <Skill
               Icon={AndroidIcon}
               title="android developer."
               className="skill"
            />
            <Skill Icon={WebIcon} title="ui/ux designer." className="skill" />
            <Skill
               Icon={DesktopMacIcon}
               title="full stack developer."
               className="skill"
            />
         </div>

         <div className="projects">
            <div className="languages">
               {languages.map((language) => (
                  <img src={language.url} alt={language.name} />
               ))}
            </div>
            Projects
         </div>
      </div>
   );
}

export default Projects;
