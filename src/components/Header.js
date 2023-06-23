import React from "react";
import headerImg from "../images/header-image.jpeg"

function Header() {
  return (
    <div className="header">        
      <img class="headerImg" id="headerImg" src={headerImg} alt="headerImg"/>
    </div>
  );
}

export default Header;