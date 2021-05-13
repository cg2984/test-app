import React, {Component} from 'react';
import Box from '@material-ui/core/Box';

class ArticleSection extends Component {
  render(props) {
    return(
    	<Box>
    		<h3>{this.props.title}</h3>
    		<p>{this.props.text}</p>
    		<img className = "article_image" src = {this.props.image}/>
    	</Box>
    )
    
  }
}
export default ArticleSection;