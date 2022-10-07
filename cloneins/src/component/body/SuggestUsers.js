import React from "react";

function SuggestUsers(fQU,fImg,fFullname) {
  return (
    <>
      <div className="suggestUsers">
      <img
        src={fImg}
        alt="avatar"
        className="img__avatar"
      />
      <div className="suggest__info">
        <h4>{fFullname}</h4>
        <p>{fQU}</p>
      </div>
    </div>
    </>
  );
}

export default SuggestUsers;
