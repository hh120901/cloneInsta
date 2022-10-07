import React, { useEffect, useState } from "react";

import { db } from '../../firebase/firebase.js';
import { getDocs, collection  } from "firebase/firestore";
function FollowUser() {
const [follows, setfollows] = useState([]);
useEffect(()=>{ 
  (async () => {
    const querySnapshot = await getDocs(collection(db, "userFriends"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
     setfollows(prev => [...prev,doc.data()])
    });
  })();
},[])
  return (
    <>
      <div className="suggest">
        <h3>Gợi ý cho bạn:</h3>
        <a href="https://www.instagram.com/">Xem tất cả</a>
      </div>
      {
        follows.map((follow,index)=>(
          <div className="suggestUsers" key={index}>
          <img
            src={follow.fImg}
            alt="avatar"
            className="img__avatar"
          />
          <div className="suggest__info">
            <h4>{follow.fFullname}</h4>
            <p>Số người theo dõi: {follow.fQU}</p>
          </div>
      </div>
        ))
      }
    </>
  );
}
export default FollowUser;
