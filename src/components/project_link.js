import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  useLocation
} from "react-router-dom";

class ProjectLink extends Component {
  render(props) {
    return(
      <div className = "proj_link">
        <img className = "proj_img" src = {this.props.projectImage} alt = "an image of the project"/>
        <div className = "proj_text">
          <p className = "proj_desc">{this.props.projectDescription}</p>
          {
            this.props.urlParam == "" 
            ? <a href = {`/project/${this.props.projectId}`}>Read the case study.</a> 
            : <a href = {`/miniproject/${this.props.projectId}`}>See more.</a> 
          }
        </div>        
      </div>
    )
    
  }
}
export default ProjectLink;


