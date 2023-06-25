import React from "react";
import BuySequelButton from "./BuySequelButton";
import playtimeCover from "../images/playtime-book-cover.jpeg";

function LittleDragons() {
  return (
    <div className="littleDragons">       
      <div className="littleDragonsTextButton">
        <p className="littleDragonsTitle"><span style={{fontWeight: "bold"}}>The Little Dragons Are At It Again!</span></p>
        <p>The next book in the&nbsp;<i>Time for Dragons</i>&nbsp; series is here! This book features so much fun and colorful adventures from the Little Dragons that you will be begging for more. Get the next installment in the series today!</p>        
        <BuySequelButton />
      </div>      
        <img class="playtimeCover" src={playtimeCover} alt="Playtime for Dragons Cover"/>
      </div>
  );
}

export default LittleDragons;