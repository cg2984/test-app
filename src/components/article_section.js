import React from 'react';

function ArticleSection({sectionText, sectionImageOne, sectionImageTwo, sectionImageThree, sectionImageFour, sectionHeader}) {
  return (
    <section>
    	<div className = "image_wrapper">  
        	<img className = "article_image_2" src = {sectionImageTwo} width="1080" height="1080"/>
        	<img className = "article_image_1" src = {sectionImageOne} width="1080" height="1080"/>
        	<div className = "sub_image_wrapper">
        		<img className = "article_image_3" src = {sectionImageThree} width="1080" height="1080"/>
        		<img className = "article_image_4" src = {sectionImageFour} width="1080" height="1080"/>
        	</div>
    	</div>
        <p className = "article_text">{sectionText}</p>
    </section>
  );
}

export default ArticleSection;
