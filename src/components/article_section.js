import React, { Component } from 'react';
class Section extends Component {
  render(props) {
    return(
      <section className = "articleSection"> 
        <h2 className = "section_title">{this.props.header}</h2>
        <p>{this.props.body}</p>
        <img src = {this.props.image} alt = "image of the final product"/>
      </section>
    )
    
  }
}
export default Section;


