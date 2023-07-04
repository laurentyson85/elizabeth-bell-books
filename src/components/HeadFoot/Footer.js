import React from "react";
import ShareButton from "../Buttons/ShareButton";


function Header() {
  return (
    <div className="footer"> 
      <div className="headerButtons">
        <p className="hashtag">#timefordragons</p>
        <p className="copyright">© 2023 Brit Books</p>        
      </div>
      <div className="share">
        <ShareButton />              
      </div>
    </div>
  );
}

export default Header;