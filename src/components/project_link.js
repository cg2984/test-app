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
        <Card className="projectLink" variant="outlined">
            <CardMedia
              component="img"
              alt="projectImg"
              height="250px"
              image={this.props.projectImage}
              title="Image of the project"
            />
            <CardContent>
              <h2>{this.props.projectName}</h2>
              <p>{this.props.projectDescription}</p>
            </CardContent>
            <CardActions>
              {
                  this.props.urlParam === "" 
                  ? <motion.div whileTap={{ scale: 0.95 }}><Button size="large" variant="contained" color="primary" href={`/project/${this.props.projectId}`}>Read the case study</Button></motion.div>
                  : <motion.div whileTap={{ scale: 0.95 }}><Button size="large" variant="contained" color="primary" href={`/miniproject/${this.props.projectId}`}>See more</Button></motion.div>
                }
            </CardActions>
        </Card>       
    )
    
  }
}
export default ProjectLink;


