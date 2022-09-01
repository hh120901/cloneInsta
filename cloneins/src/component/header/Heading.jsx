import React from "react";
import './Heading.css'
import { House, Mess  } from "../../Icons";


function Heading() {
  return (
    <>
      <div className="heading__homeIcon">
        <h2>𝒟𝓇𝑒𝒶𝓂𝑔𝓇𝒶𝓂</h2>
      </div>
      <div className="headingn__aIcon">
        
        <a href="https://www.instagram.com/">
          <House />
        </a>
        <a href="https://www.instagram.com/direct/inbox/">
          <Mess />
        </a>
        <img
            src="https://via.placeholder.com/30"
            alt="avatar"
          />
      </div>
    </>
  );
}
 export default Heading;