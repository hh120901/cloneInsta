import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";
import RightPost from "./RightPost";
import Heading from "./Heading";
import { db } from './firebase.js';
import { getDocs, collection } from "firebase/firestore";


//FireBase: firebase login, firebase init,firebase deploy
//𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶
function App() {
  const [posts, setPosts] = useState([]);
  // UseEffect: 
  useEffect(()=>{
 
     (async () => {
       const querySnapshot = await getDocs(collection(db, "posts"));
       querySnapshot.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
        console.log(doc.data())
        setPosts(prev => [...prev,doc.data()])
       });
     })();
  },[])


  return (
    <div className="App">
      <div className="heading">
        <Heading />
      </div>
      <div className="container">
        <div className="post__left">
        {
          posts.map((post,index)=>(
            <Post key={index} username={post.username} caption={post.caption} image_url={post.image_url}/>
          ))
        }
          
        </div>
        <div className="post__right">
          <RightPost/>
        </div>
      </div>
    </div>
  );
}

export default App;
