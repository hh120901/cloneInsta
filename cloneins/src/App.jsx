import "./App.css";
import React from "react";
import Post from "./Post";
import RightPost from "./RightPost";
import Heading from "./Heading";
//𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶
function App() {
  return (
    <div className="App">
      <div className="heading">
        <Heading />
      </div>
      <div className="container">
        <div className="post__left">
          <Post />
          <Post />
          <Post />
        </div>
        <div className="post__right">
          <RightPost/>
        </div>
      </div>
    </div>
  );
}

export default App;
