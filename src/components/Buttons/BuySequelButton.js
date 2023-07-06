import React from "react";
import { Link } from "react-router-dom";

function BuySequelButton() { 
  return (        
    <Link to="/bookstore">
      <button className="outlineButton">Buy the Sequel</button>
    </Link>        
  )
}
export default BuySequelButton;