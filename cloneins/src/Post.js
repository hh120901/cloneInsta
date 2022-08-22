import React from "react";
import './Post.css'
function Post({username, caption, image_url}){
    return (
        <div className='post'>
          <div className='post__heading'>
            <img src='https://via.placeholder.com/30' alt='avatar' className="img__avatar"/>
            <h3> {username} </h3>
          </div>
          <div className='post__image'>
            <img 
              src={image_url}
              alt='post_image'
            />
          </div>
          <div className='post__status'>
            <p><strong>{username}</strong>: {caption}</p>
          </div>
        </div>
    )
}
export default Post;