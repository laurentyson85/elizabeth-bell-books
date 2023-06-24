import React from "react";
import { NavLink } from "react-router-dom"

let activeStyle = {  
  borderBottom: "2px solid #4B4A4A",
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
            to="gallery"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }
          >
            Gallery
          </NavLink>       
        <NavLink
            to="prints"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }                        
          >
            Bookstore
          </NavLink>        
        <NavLink
            to="about"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }                        
          >
            About
          </NavLink>
          <NavLink
            to="bio"
            end
            style={({ isActive }) =>
              isActive ? activeStyle : undefined
            }                        
          >
            Contact
          </NavLink>
        </nav>
    </div>
    
  );
}

export default Nav;