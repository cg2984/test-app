import React from 'react';

function ArticleSection({sectionText, sectionImage}) {
  return (
    <section>
    	<img className = "section_image" src={sectionImage} width="1080" height="1080" alt="Dreamer Final"/>
    	<div>
    		<h2 className = "section_header">Brainstorming</h2>
    		<hr></hr>
    		<p className = "section_text">{sectionText}</p>
    	</div>
    </section>
  );
}

export default ArticleSection;
