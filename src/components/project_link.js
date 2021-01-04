import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  useLocation
} from "react-router-dom";

class ProjectLink extends Component {
  render(props) {
    return(
      <div className = "proj_wrapper">
        <img className = "proj_img" src = {this.props.projectImage} alt = "an image of the project"/>
        <div className = "project_text">
          <h2>{this.props.projectName}</h2>
          <p className = "proj_des">{this.props.projectDescription}</p>
          {/*<div className = "tools">
            <h3>Tools Used</h3>
            <ul>
              <li>{this.props.tool_1}</li>
              <li>{this.props.tool_2}</li>
              <li>{this.props.tool_3}</li>
            </ul>
          </div>*/}
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


