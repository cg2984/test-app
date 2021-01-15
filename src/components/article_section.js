import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";
import "../article.css"

class Section extends Component {
  render(props) {
    return(
      <section className = "articleSection"> 
        <h2 className = "section_title">{this.props.header}</h2>
        <p>{this.props.body}</p>
      </section>
    )
    
  }
}
export default Section;


