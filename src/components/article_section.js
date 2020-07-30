import React from 'react';

function ArticleSection({sectionText, sectionImageOne, sectionImageTwo, sectionImageThree, sectionImageFour, sectionHeader}) {
  return (
    <section className = "articleSection">
    	<div className = "image_wrapper">  
        	<img className = "article_image_2" src = {sectionImageTwo} width="1080" height="1080"/>
        	<img className = "article_image_1" src = {sectionImageOne} width="1080" height="1080"/>
    	</div>
    	<div className = "text_image_wrapper">
    			<div className = "image_wrapper_inner">
        			<img className = "article_image_small" src = {sectionImageThree} width="1080" height="1080"/>
        			<img className = "article_image_small" src = {sectionImageFour} width="1080" height="1080"/>
        		</div>
        		<p className = "article_text">{sectionText}</p>
        </div>
    </section>
  );
}

export default ArticleSection;
