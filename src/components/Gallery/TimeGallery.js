import React from "react";
import time1 from "../../images/time-1.jpeg";
import time2 from "../../images/time-2.jpeg";
import time3 from "../../images/time-3.jpeg";
import time4 from "../../images/time-4.jpeg";
import time5 from "../../images/time-5.jpeg";
import time6 from "../../images/time-6.jpeg";

function TimeGallery() {

  return (   
    <div className="timeGallery">
      <p className="timeGalleryTitle">Take a peek at&nbsp;<i>Time for Dragons</i></p>        
      <div class="row">
        <div class="column">
          <div className="container">
            <img className= "image" src={time1} alt="Time for Dragons illustration"/>
            <div class="overlay">
              <div class="text">Bedtime for Dragons - Pg 2</div>              
            </div>
          </div>
          <div className="container">
            <img src={time2} alt="Time for Dragons illustration"/>
            <div class="overlay">
              <div class="text">Playtime for Dragons - Pg 5</div>              
            </div>
          </div>          
        </div>
        <div class="column">
        <div className="container">
          <img src={time3} alt="Time for Dragons illustration"/>
          <div class="overlay">
            <div class="text">Bedtime for Dragons - Pg 8</div>              
          </div>
        </div>
          <div className="container">
            <img src={time4} alt="Time for Dragons illustration"/>
            <div class="overlay">
              <div class="text">Playtime for Dragons - Pg 10</div>              
            </div>
          </div>          
        </div>
        <div class="column">
          <div className="container">
            <img src={time5} alt="Time for Dragons illustration"/>
            <div class="overlay">
              <div class="text">Bedtime for Dragons - Pg 13</div>              
            </div>
          </div>
          <div className="container">
            <img src={time6} alt="Time for Dragons illustration"/>
            <div class="overlay">
              <div class="text">Playtime for Dragons - Pg 18</div>              
            </div>
         </div>           
        </div>
      </div>      
    </div>   
  );
}

export default TimeGallery;