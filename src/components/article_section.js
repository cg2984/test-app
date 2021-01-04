import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

class Section extends Component {
  render(props) {
    return(
      <section className = "articleSection"> 
        <h2 className = "section_title">{this.props.header}</h2>
        <p>{this.props.body}</p>
        <Carousel className = "Carousel">
		  <Carousel.Item>
		    <img
		      className="article_img"
		      src={this.props.image1}
		      alt="First slide"
		    />
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="article_img"
		      src={this.props.image2}
		      alt="Second slide"
		    />
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="article_img"
		      src={this.props.image3}
		      alt="Third slide"
		    />
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="article_img"
		      src={this.props.image4}
		      alt="Fourth slide"
		    />
		  </Carousel.Item>
		</Carousel>
      </section>
    )
    
  }
}
export default Section;


