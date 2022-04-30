import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { motion } from "framer-motion";

class ProjectLink extends Component {
  render(props) {
    return(
      <article className="y-3">
        <span className="project-icon">
        {
          this.props.urlParam === "" 
          ? <a className="h3 project-link" href={`/project/${this.props.projectId}`}>{this.props.projectName}</a>
          : <a className="h3 project-link" href={`/miniproject/${this.props.projectId}`}>{this.props.projectName}</a>
        }
        </span>
      </article>
    )  
  }
}
export default ProjectLink;


