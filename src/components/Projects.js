import React, { useState, useEffect } from 'react';
import './Projects.css';
import Skill from './Skill';
import Project from './Project';
import AndroidIcon from '@material-ui/icons/Android';
import WebIcon from '@material-ui/icons/Web';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import { db } from '../firebase';

function Projects() {
   const [languages, setLanguages] = useState([]);
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      async function fetchLanguages() {
         // Reference
         const languagesRef = db.collection('languages');
         const snapshot = await languagesRef.get();

         if (snapshot.empty) {
            console.log('No languages');
         } else {
            let languages = [];

            // Store in array
            snapshot.forEach((doc) => {
               const data = doc.data();
               if (data.hide == null) {
                  languages.push({
                     key: doc.id,
                     name: data.name,
                     order: data.order,
                     url: data.url,
                  });
               }
            });

            // Sort by order
            languages.sort((a, b) => a.order - b.order);
            setLanguages(languages);
         }
      }

      fetchLanguages();

      async function fetchProjects() {
         // Reference
         const projectsRef = db.collection('projects');
         const snapshot = await projectsRef.get();

         if (snapshot.empty) {
            console.log('No projects');
         } else {
            let projects = [];

            // Store in array
            snapshot.forEach((doc) => {
               const data = doc.data();
               if (data.hide == null) {
                  projects.push({
                     key: doc.id,
                     title: data.title,
                     details: data.details,
                     order: data.order,
                     link: data.link,
                     language: data.language,
                     url: data.url,
                     css: data.css,
                  });
               }
            });

            // Sort by order
            projects.sort((a, b) => a.order - b.order);
            setProjects(projects);
         }
      }

      fetchProjects();
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
            <div className="projects-list-container">
               <div className="header">- Projects</div>
               <div className="title">selected projects.</div>
               <div className="body">
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus dolorum laborum vel assumenda quia commodi officia
                  illo facilis, corrupti blanditiis voluptas maiores amet?
                  Voluptates perferendis maiores itaque quos eius ex.
               </div>
               <div className="button">
                  <a href="mailto:adnanhakim007@gmail.com">explore more.</a>
               </div>
               <div className="projects-list">
                  {projects.map((project) => (
                     <Project
                        title={project.title}
                        language={project.language}
                        image={project.url}
                        details={project.details}
                        link={project.link}
                        css={project.css}
                     />
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}

export default Projects;
