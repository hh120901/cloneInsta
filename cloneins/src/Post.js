import React from "react";
import './Post.css'
function Post(){
    return (
        <div className='post'>
          <div className='post__heading'>
            <img src='https://via.placeholder.com/35' alt='avatar' className="img__avatar"/>
            <h3>username: </h3>
          </div>
          <div className='post__image'>
            <img 
              src='https://images6.alphacoders.com/124/1249545.jpg'
              alt='post_image'
            />
          </div>
          <div className='post__status'>
            <p><strong>username</strong>: caption bai viet</p>
          </div>
        </div>
    )
}
export default Post;