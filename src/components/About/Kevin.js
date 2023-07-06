import React from "react";
import kevinHeadshot from "../../images/kevin-headshot.jpeg";

function Kevin() {

  return (
    <div className="aboutDetails">
      <img class="aboutHeadshotImg" src={kevinHeadshot} alt="Kevin About Headshot"/>
      <p className="aboutTitle">About the Illustrator</p>
      <div className="aboutText">      
        <p><span style={{fontWeight: "bold"}}>Kevin Harrell </span>is a self taught artist, who fell in love with creating at a very young age. He was born and raised on the south side of Chicago and the greater Chicagoland area throughout his formative years. The rich history and culture of Chicago has heavily influenced his passion for art. He grabs inspiration from masters of the art world, domestic and abroad - artists such as Hayao Miyazaki, Kim Jung Gi, LeSean Thomas, and others. Playtime for Dragons is his third venture into children's book illustration. He also worked on a popular webcomics series called Albert the Alien. What Kevin aims to do with his art is warm the hearts, and inspire the creativity of budding young minds all over the world.</p>
      </div>  
    </div>    
  );
}

export default Kevin;