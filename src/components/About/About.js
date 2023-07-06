import React from "react";
import Elizabeth from "./Elizabeth";
import Kevin from "./Kevin";

function About() {

  return (   
    <div className="aboutBackground">
      <div className="about">        
        <Elizabeth/>        
        <Kevin/>
      </div>
    </div>    
  );
}

export default About;