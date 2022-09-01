import React  from "react";
import FollowUser from "./FollowUser";
import './Post.css'
function RightPost({username}) {
  return (
    <>
      <div className="myProfile">
        <img
              src="https://via.placeholder.com/45"
              alt="avatar"
              className="img__avatar"
            />
            <div className="post__myprofile">
              <h3>{username}</h3>
{/*             
              <p>Nguyen Van Hau</p> */}
            </div>
            <div className="switchUser">
              <a href="https://www.instagram.com/">Change</a>
            </div>
      </div>
      <div className="followUser">
        <FollowUser />
      </div>
    </>
  );
}
export default RightPost;
