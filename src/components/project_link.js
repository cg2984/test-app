import React from 'react';

function ProjectLink({projectName, projectDescription}) {
  return (
    <div className = "project-link_home">
      	<div className="project_txt">
        	<a href = "lile"><h2 className = "h2_link">{projectName}</h2></a>
        	<p>{projectDescription}</p>
        	<img className = "project_pic" src="https://live.staticflickr.com/65535/49696081927_f6d02f2d83_o.png" alt="usertesting"/>
      	</div>
    </div>
  );
}

export default ProjectLink;
