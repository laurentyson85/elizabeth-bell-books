import React from "react";
import { Link } from "react-router-dom";

function AboutButton() { 
  return (     
    <Link to="/about">
      <button className="goldButtons">About Elizabeth Bell</button>
    </Link>       
  )
}
export default AboutButton;