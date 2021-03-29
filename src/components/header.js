import React, {Component} from 'react';
import Link from "../components/link.js";

class Header extends Component {
  render(props) {
    return(
      <header>
      	<Link name={this.props.name} location={this.props.location}/>
      	<h1>{this.props.title}</h1>
      	{this.props.blurb}
      </header>
    )
    
  }
}
export default Header;

