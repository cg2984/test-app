import React, {Component} from 'react';

class Link extends Component {
  render(props) {
    return(
      <a className="link" href={this.props.location}>{this.props.name}</a>
    )
    
  }
}
export default Link;