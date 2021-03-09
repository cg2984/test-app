import React, {Component} from 'react';

class Header extends Component {
  render(props) {
    return(
      <header>
      	<h1>{this.props.title}</h1>
      	{this.props.blurb}
      </header>
    )
    
  }
}
export default Header;

