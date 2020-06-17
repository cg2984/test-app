import React from 'react';

function ProjectLink({projectName, projectDescription, projectImage, projectId}) {
  return (
    <div className = "project-link_home">
      	<div className="project_txt">
    	<a href = "/?id=recrQE5lxpmzV4bRA"><h2 className = "h2_link">{projectName}</h2></a>
        	<p>{projectDescription}</p>
        	<img className = "project_pic" src = {projectImage} alt = {projectName}/>
      	</div>
    </div>
  );
}

export default ProjectLink;
