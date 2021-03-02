import React, { Component } from 'react';
import { SRLWrapper } from "simple-react-lightbox";

class Section extends Component {
  render(props) {
    return(
      <section className = "articleSection"> 
      	<span>
	        <h2 className = "section_title">{this.props.header}</h2>
	        <p>{this.props.body}</p>
        </span>
        <SRLWrapper>
        	<img src = {this.props.image} alt = "the final product"/>
        </SRLWrapper>
      </section>
    )
    
  }
}
export default Section;


