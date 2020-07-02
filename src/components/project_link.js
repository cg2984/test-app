import React from 'react';

function ProjectLink({projectName, projectDescription, projectImage, projectId}) {
  const style = {
    backgroundImage: ` linear-gradient(180deg, rgba(37, 207, 164, 0.25) 0%, rgba(0, 10, 255, 0.25) 100%), url(${projectImage})`,
    backgroundSize: `450px`,
    backgroundColor: `#25cfa4`,
    margin: `5px`,
    width:`300px`,
    height: `300px`,
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
