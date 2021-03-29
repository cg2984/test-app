import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';

class Section extends Component {
  render(props) {
    return( 
      <span>
    	   <h3 className = "section_title">{this.props.header}</h3>
    	   <p>{this.props.body}</p>
      </span>
    )
    
  }
}
export default Section;


