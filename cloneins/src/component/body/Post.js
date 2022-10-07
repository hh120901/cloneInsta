import React, { useState } from "react";
import Modal from "react-modal";

import './Post.css'
function Post({username, caption, image_url}){
  const [mOpen, setMOpen] = useState(false);
  function openLoginModal() {
    setMOpen(true);
  }
  function closeLoginModal() {
    setMOpen(false);
  }
  const fullImg = ()=>{
     
  }

    
  
    return (
      
        <div className='post__fullImg'>
         <Modal
          className="full__img"
          isOpen={mOpen}
          onRequestClose={closeLoginModal}
          contentLabel="Example Modal"
        >
        <div className="box__full">
          <div className="div__img">
          <img 
              className="modal__img"
              src={image_url}
              alt='post_image'
            />
          
          </div>
          <div>
            <button className="btn__close" onClick={closeLoginModal}>&times;</button>
          </div>
        </div>
        </Modal>
    
          <div className='post__heading'>
            <img src='https://via.placeholder.com/30' alt='avatar' className="img__avatar"/>
            <h3> {username} </h3>
          </div>
          <div className='post__image'>
            <img 
              src={image_url}
              alt='post_image'
              onClick={openLoginModal}
            />
          </div>
          <div className='post__status'>
            <p><strong>{username}</strong>: {caption}</p>
          </div>
        </div>
    )
}
export default Post;