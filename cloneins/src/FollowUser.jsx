import React from "react";
import SuggestUsers from "./SuggestUsers";

function FollowUser() {
  return (
    <>
      <div className="suggest">
        <h3>Gợi ý cho bạn:</h3>
        <a href="https://www.instagram.com/">Xem tất cả</a>
      </div>
        <SuggestUsers/>
        <SuggestUsers/>
        <SuggestUsers/>
    </>
  );
}
export default FollowUser;
