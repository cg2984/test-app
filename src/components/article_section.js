import React from 'react';
import Rodal from 'rodal';
import Modal from 'react-modal';


function ArticleSection({sectionText, sectionImageOne, sectionImageTwo, sectionImageThree, sectionImageFour, sectionHeader}) {
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal(){
    setIsOpen(false);
  }
    
  return (
    <section className = "articleSection">
        <Modal
          className = "modal"
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
        >
        <img onClick={closeModal} className = "article_image_small" src = {sectionImageThree} width="1080" height="1080"/>
        <button onClick={closeModal}>X</button>
        </Modal>

    	<div className = "image_wrapper">  
        	<img className = "article_image_2" src = {sectionImageTwo} width="1080" height="1080"/>
        	<img className = "article_image_1" src = {sectionImageOne} width="1080" height="1080"/>
    	</div>
    	<div className = "text_image_wrapper">
                <div className = "image_wrapper_inner">
                    <img onClick={openModal} className = "article_image_small" src = {sectionImageThree} width="1080" height="1080"/>
                    <img className = "article_image_small" src = {sectionImageFour} width="1080" height="1080"/>
                 </div>
        		<p className = "article_text">{sectionText}</p>
        </div>
    </section>
  );
}

export default ArticleSection;


