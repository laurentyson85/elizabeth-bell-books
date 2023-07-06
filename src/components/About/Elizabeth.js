import React from "react";
import elizabethHeadshot from "../../images/elizabeth-headshot.jpeg";

function Elizabeth() {

  return (
    <div className="aboutDetails">
      <img class="aboutHeadshotImg" src={elizabethHeadshot} alt="Elizabeth About Headshot"/>
      <p className="aboutTitle">About the Author</p>
      <div className="aboutText">      
        <p><span style={{fontWeight: "bold"}}>Elizabeth Bell </span>is a Chicago born writer of short stories, poetry, and children's books. She has been writing since the age of nine. She is the author of the&nbsp;<i>Time for Dragons</i>&nbsp; children's book series which includes the first installment,&nbsp;<i>Bedtime for Dragons</i>&nbsp;, and now the sequel,&nbsp;<i>Bedtime for Dragons</i>&nbsp;. She currently lives in Austin, Texas with her leopard gecko, Dragon, whose rambunctious adventures continue to inspire more books.</p>
      </div>  
    </div>    
  );
}

export default Elizabeth;