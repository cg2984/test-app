import React from 'react';

function ArticleSection({sectionText, sectionImageOne, sectionImageTwo, sectionHeader}) {
  return (
    <section>
        <p className = "article_text">{sectionText}</p>  
        <img className = "article_image_2" src = {sectionImageTwo} width="1080" height="1080"/>
        <img className = "article_image_1" src = {sectionImageOne} width="1080" height="1080"/>
    </section>
  );
}

export default ArticleSection;
