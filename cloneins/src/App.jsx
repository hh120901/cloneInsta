import "./App.css";
import React, { useEffect } from "react";
import { useState } from "react";
import Post from "./component/body/Post";
import RightPost from "./component/body/RightPost";
import Heading from "./component/header/Heading";
import { db } from './firebase/firebase.js';
import { getDocs, collection } from "firebase/firestore";
import LoginBtn from "./component/login/LoginBtn";

//FireBase: firebase login, firebase init,firebase deploy
//𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶
function App() {
  //some useState 
  const [posts, setPosts] = useState([]);
  // UseEffect: display Posts
  useEffect(()=>{
     (async () => {
       const querySnapshot = await getDocs(collection(db, "posts"));
       querySnapshot.forEach((doc) => {
         // doc.data() is never undefined for query doc snapshots
        setPosts(prev => [...prev,doc.data()])
       });
     })();
  },[])
  const [userLogin, setUserLogin] = useState('Login')

  function appCallBack (username){
    setUserLogin(username);
  }
  return (
    
    <div className="App">
      <div className="heading">
        <Heading />
      </div>
      <div className="container">
    <LoginBtn parentCallback={appCallBack}/>
        <div className="post__left">
          {posts.map((post, index) => (
            <Post
              key={index}
              username={post.username}
              caption={post.caption}
              image_url={post.image_url}
            />
          ))}
        </div>
        <div className="post__right">
          <RightPost username={userLogin}/>
        </div>
      </div>
    </div>
  );
}

export default App;
