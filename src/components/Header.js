import React from "react";
import Nav from "./Nav";
import AboutButton from "./AboutButton";
import BookstoreButton from "./BookstoreButton";

function Header() {
  return (
    <div className="header">  
      <Nav />
      <h2 className="headerName">Elizabeth Bell</h2>
      <p className="headerText">Author and Publisher of the&nbsp;<i>Time for Dragons</i>&nbsp;children's book series</p>
      <div className="headerButtons">
        <AboutButton />
        <BookstoreButton />
      </div>
    </div>
  );
}

export default Header;