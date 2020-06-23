import React from 'react';

function ProjectLink({projectName, projectDescription, projectImage, projectId}) {
  return (
    <div className = "project-link_home">
    	<img className = "project_pic" src = {projectImage} alt = {projectName}/>
      	<div className="project_txt">
    		<a href = {projectId}><h2 className = "h2_link">{projectName}</h2></a>
        	<p>{projectDescription}</p>
        </div>
            	
    </div>
  );
}

export default ProjectLink;
