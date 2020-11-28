import React, {useEffect,useState} from 'react';
import {
  useLocation
} from "react-router-dom";


function ProjectLink({projectName, projectDescription, projectImage, projectId, urlParam}) {
  return (
    <div className = "project-link">
      <img className = "project_img" src = {projectImage} alt = "an image of the project"/>
      <div className = "project_text">
        <p className = "project_description">{projectDescription}</p>
        <div className = "project_tools">
          <p> Tools Used </p>
          <ul>
            <li> Figma </li>
            <li> Pen and Paper </li>
            <li> Interviews </li>
          </ul>
        </div>

        {
          urlParam == "" 
          ? <a href = {`/project/${projectId}`}>read case study</a> 
          : <a href = {`/miniproject/${projectId}`}>see more</a> 
        }
      </div>       	
    </div>
  );
}

export default ProjectLink;
