import React from "react";
import { Link } from "react-router-dom";

function BookstoreButton() { 
  return (
    <Link to="/bookstore">
      <button className="goldButtons">Visit the Bookstore</button>
    </Link>        
  )
}
export default BookstoreButton;