import React from "react";
import { Link } from "react-router-dom";

function ShareButton() { 
  return (        
    <Link to="https://www.addtoany.com/share#elizabethbellbooks.com" target="_blank" rel="noreferrer">
      <button className="shareButton">+ SHARE</button>
    </Link>    
  )
}
export default ShareButton;