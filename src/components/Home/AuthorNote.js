import React from "react";
import authorNoteImg from "../../images/author-note-image.jpeg";

function AuthorNote() {

  return (
    <>
    <p className="authorNoteTitle">Note from the Author (and Dragon)</p>
    <div className="authorNote">
        <img class="authorNoteImg" src={authorNoteImg} alt="Elizabeth Headshot"/>      
      <div className="authorNoteChild-2">
        <p>Hi! I'm Elizabeth Bell and thank you for visiting my website. The&nbsp;<i>Time for Dragons</i>&nbsp; children's book series was 100% inspired by my two pet leopard geckos, Geiko (the Little Yellow Dragon) and Dragon (the Little Pink Dragon - you can see her in the picture!)</p>
        <p>I am so proud to have created a series that I hope children will love as much as I do for years to come and inspire other writers (and reptile-lovers) to do the same.</p>
        <p>Feel free to contact me if you have any questions!</p>
        <p className="signature">Elizabeth Bell</p>
      </div> 
    </div>  
    </>   
    
  );
}

export default AuthorNote;