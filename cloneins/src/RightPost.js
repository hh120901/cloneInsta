import React from "react";
import FollowUser from "./FollowUser";
import MyProfile from "./MyProfile";
import './Post.css'
function RightPost() {
  return (
    <>
      <div className="myProfile">
        <MyProfile />
      </div>
      <div className="followUser">
        <FollowUser />
      </div>
    </>
  );
}
export default RightPost;
