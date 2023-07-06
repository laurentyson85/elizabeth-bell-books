import React from "react";
import { Link } from "react-router-dom";

function AmazonButton() { 
  return (
    <Link to="https://www.amazon.com/stores/Elizabeth-Bell/author/B07PQSX9CS?ref=ap_rdr&store_ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true" target="_blank" rel="noreferrer">
      <button className="goldButtons">Order on Amazon</button>
    </Link>      
  )
}
export default AmazonButton;