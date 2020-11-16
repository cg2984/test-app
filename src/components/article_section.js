import React from 'react';
import Modal from 'react-modal';


function ArticleSection({sectionText, sectionImageOne, sectionImageTwo, sectionImageThree, sectionImageFour, sectionHeader}) {
    
  return (
    <section className = "articleSection">
    	<div className = "image_wrapper">  
        	<img className = "article_image_main" src = {sectionImageTwo} width="1080" height="1080"/>
        	<img className = "article_image_main" src = {sectionImageOne} width="1080" height="1080"/>
    	</div>
    	<div className = "text_image_wrapper">
                <div className = "image_wrapper_inner">
                    <img className = "article_image_small" src = {sectionImageFour} width="1080" height="1080"/>
                 </div>
        		<p className = "article_text">{sectionText}</p>
        </div>
    </section>
  );
}

export default ArticleSection;


