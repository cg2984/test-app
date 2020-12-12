import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  useLocation
} from "react-router-dom";

class ProjectLink extends Component {
  render(props) {
    return(
      <div className = "project-link">
      <img className = "project_img" src = {this.props.projectImage} alt = "an image of the project"/>
      <div className = "project_text">
        <h2>{this.props.projectName}</h2>
        <p className = "project_description">{this.props.projectDescription}</p>
        {
          this.props.urlParam == "" 
          ? <a href = {`/project/${this.props.projectId}`}>read case study</a> 
          : <a href = {`/miniproject/${this.props.projectId}`}>see more</a> 
        }
      </div>        
    </div>
    )
    
  }
}
export default ProjectLink;


