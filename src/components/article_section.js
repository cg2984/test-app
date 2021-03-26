import React, { Component } from 'react';

class Section extends Component {
  render(props) {
    return( 
      <span>
	       <h2 className = "section_title">{this.props.header}</h2>
	       <p>{this.props.body}</p>
      </span>
    )
    
  }
}
export default Section;


