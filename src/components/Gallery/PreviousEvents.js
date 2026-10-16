import React from "react";
import event1 from "../../images/event-1.jpeg";
import event2 from "../../images/event-2.jpeg";
import event3 from "../../images/event-3.jpeg";
import event4 from "../../images/event-4.jpeg";
import event5 from "../../images/event-5.jpeg";
import event6 from "../../images/event-6.jpeg";

function PreviousEvents() {

  return (   
    <div className="previousEvents">
      <p className="previousEventsTitle">Previous Author Events</p>        
      <div className="row">
        <div className="column">
          <div className="container">
            <img src={event1} alt="Author event 1"/>
            <div className="overlay">
              <div className="text">On the Shelf at Barnes & Noble in Chandler, AZ - April 2019</div>              
            </div>
          </div>
          <div className="container">
            <img src={event2} alt="Author event 2"/>
            <div className="overlay">
              <div className="text">Book Signing at Tempe, AZ Book Festival - November 2019</div>              
            </div>
          </div>          
        </div>
        <div className="column">
          <div className="container">
            <img src={event3} alt="Author event 3"/>
            <div className="overlay">
              <div className="text">Booth at Tempe, AZ Book Festival - November 2019</div>              
            </div>
          </div>
          <div className="container">
            <img src={event4} alt="Author event 4"/>
            <div className="overlay">
              <div className="text">Tempe, AZ FanCon - January 2020</div>              
            </div>
          </div>          
        </div>
        <div className="column">
          <div className="container">
            <img src={event5} alt="Author event 5"/>
            <div className="overlay">
              <div className="text">Booth at Tempe, AZ FanCon - January 2020</div>              
            </div>
          </div>
          <div className="container">
            <img src={event6} alt="Author event 6"/>
            <div className="overlay">
              <div className="text">Booth at KJZZ StoryFest in Mesa, AZ - June 2019</div>              
            </div>
          </div>          
        </div>
      </div>      
    </div>   
  );
}

export default PreviousEvents;