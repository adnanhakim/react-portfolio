import React from 'react';
import './Projects.css';
import Skill from './Skill';
import AndroidIcon from '@material-ui/icons/Android';
import WebIcon from '@material-ui/icons/Web';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';

function Projects() {
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
         <div className="projects">Projects</div>
      </div>
   );
}

export default Projects;
