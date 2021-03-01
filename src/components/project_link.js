import React, { Component } from 'react';

class ProjectLink extends Component {
  render(props) {
    return(
      <div className = "proj_link">
        <img className = "proj_img" src = {this.props.projectImage} alt = "the project"/>
        <div className = "proj_text">
          <h2>{this.props.projectName}</h2>
          <p className = "proj_desc">{this.props.projectDescription}</p>
          {
            this.props.urlParam === "" 
            ? <a href = {`/project/${this.props.projectId}`}>Read the case study.</a> 
            : <a href = {`/miniproject/${this.props.projectId}`}>See more.</a> 
          }
        </div>        
      </div>
    )
    
  }
}
export default ProjectLink;


