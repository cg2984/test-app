import React, {useEffect,useState} from 'react';
import {
  useLocation
} from "react-router-dom";


function ProjectLink({projectName, projectDescription, projectImage, projectId, urlParam}) {
  const style = {
    backgroundImage: `linear-gradient(180deg, rgba(21, 33, 207, 0.25) 0%, rgba(36, 200, 255, 0.25) 100%), url(${projectImage})`,
    backgroundSize: `450px`,
    margin: `5px`,
    width:`100%`,
    height: `100%`,
    border: `5px solid #000000`
  };

  return (
    <div className = "project-link_home">
      {
        urlParam == "" 
        ? <a className = "project_name" href = {`/project/${projectId}`}>{projectName}</a> 
        : <a className = "project_name" href = {`/miniproject/${projectId}`}>{projectName}</a> 
      }
      <p className = "project_description">{projectDescription}</p>
      <img src = {projectImage} className = "project_img"/>             	
    </div>
  );
}

export default ProjectLink;
