import React, {Component} from 'react';
import Box from '@material-ui/core/Box';
import { SRLWrapper } from "simple-react-lightbox";

class ArticleSection extends Component {
  render(props) {
    return(
    	<Box>
    		<h2 class="h2">{this.props.title}</h2>
    		<p class="text">{this.props.text}</p>
        <SRLWrapper>
    		  <img className = "article_image" src = {this.props.image}/>
        </SRLWrapper>
    	</Box>
    )
    
  }
}
export default ArticleSection;