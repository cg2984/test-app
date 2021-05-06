import React, {Component} from 'react';

class Link extends Component {
  render(props) {
    return(
      <a className={this.props.classname} href={this.props.location}>{this.props.name}</a>
    )
    
  }
}
export default Link;