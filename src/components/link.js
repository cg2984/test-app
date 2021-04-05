import React, {Component} from 'react';
import { motion } from "framer-motion";

class Link extends Component {
  render(props) {
    return(
      <a className="link" href={this.props.location}>{this.props.name}</a>
    )
    
  }
}
export default Link;