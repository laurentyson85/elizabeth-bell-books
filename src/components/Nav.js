import React from "react";
import { NavLink } from "react-router-dom"

let activeStyle = {  
  color:"#116600",
  borderBottom: "2px solid #116600",
}


function Nav() {
  return (
    <div className="navBar">
        <nav>
        <NavLink
            to="/"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }            
          >
            Home
          </NavLink>        
        <NavLink
            to="hats"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Hats
          </NavLink>       
        <NavLink
            to="prints"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }                        
          >
            Prints
          </NavLink>        
        <NavLink
            to="bio"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }                        
          >
            Bio
          </NavLink>
        </nav>
    </div>
    
  );
}

export default Nav;