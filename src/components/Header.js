import React from "react";
import Nav from "./Nav";

function Header() {
  return (
    <div className="header">  
      <Nav />
      <h2 className="headerName">Elizabeth Bell</h2>
      <p className="headerText">Author and Publisher of the <i>Time for Dragons</i> children's book series</p>
    </div>
  );
}

export default Header;