import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

class ProjectLink extends Component {
  render(props) {
    return(
      <Card className="projectLink">
          <CardMedia
            component="img"
            alt="projectImg"
            height="250px"
            image={this.props.projectImage}
            title="Image of the project"
          />
          <h2>{this.props.projectName}</h2>
          <p>{this.props.projectDescription}</p>
          <CardActions>
            {
                this.props.urlParam === "" 
                ? <Button size="large" variant="contained" color="primary" href={`/project/${this.props.projectId}`}>Read the case study</Button>
                : <Button size="large" variant="contained" color="primary" href={`/miniproject/${this.props.projectId}`}>See more</Button> 
              }
          </CardActions>
      </Card>       
    )
    
  }
}
export default ProjectLink;


