import React from "react";
import { Link } from "react-router-dom";

function BarnesNobleButton() { 
  return (      
    <Link to="https://www.barnesandnoble.com/s/Elizabeth%20Bell,%20Kevin%20Harrell" target="_blank" rel="noreferrer">
      <button className="goldButtons">Order on Barnes & Noble</button>
    </Link>     
  )
}
export default BarnesNobleButton;