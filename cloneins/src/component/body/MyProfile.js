import React from "react";
function MyProfile(){
    return (
      <>
        <div className="myProfile">
          <img
            src="https://via.placeholder.com/45"
            alt="avatar"
            className="img__avatar"
          />
          <div className="post__myprofile">
            <h3>12.vanhau</h3>
            <p>Nguyen Van Hau</p>
          </div>
          <div className="switchUser">
            <a href="https://www.instagram.com/">Change</a>
          </div>
        </div>
      </>
    );
}

export default MyProfile;
