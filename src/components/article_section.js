import React from 'react';

function ArticleSection({sectionText, sectionImageOne, sectionImageTwo, sectionHeader}) {
  return (
    <section>
        <div className = "section_one">
            <p className = "section_text">{sectionText}</p>  
            <img className = "section_image" src={sectionImageOne} width="1080" height="1080" alt="Dreamer Final"/>
        </div>
        <img className = "section_big_image" src = {sectionImageTwo} width="1080" height="1080"/>
    </section>
  );
}

export default ArticleSection;
