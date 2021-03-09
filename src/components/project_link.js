import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class ProjectLink extends Component {
  render(props) {
    return(
      <div className = "proj_link">
        <h2>{this.props.projectName}</h2>
        <p>{this.props.projectDescription}</p>
        {
          this.props.urlParam === "" 
          ? <Button variant="contained" color="primary" href={`/project/${this.props.projectId}`}>Read the case study</Button>
          : <Button variant="contained" color="primary" href={`/miniproject/${this.props.projectId}`}>See more</Button> 
        }
        <img className = "proj_img" src = {this.props.projectImage} alt = "the project"/>
      </div>        
    )
    
  }
}
export default ProjectLink;


