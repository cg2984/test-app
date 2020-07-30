import React from 'react';

function ProjectLink({projectName, projectDescription, projectImage, projectId}) {
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
      <a href = {projectId}><h2 className = "h2_link">{projectName}</h2></a>
      <p>{projectDescription}</p>
    	<div style = {style} className = "image_div"></div>               	
    </div>
  );
}

export default ProjectLink;
