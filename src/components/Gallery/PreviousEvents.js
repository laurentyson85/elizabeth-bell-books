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
      <div class="row">
        <div class="column">
          <img src={event1} alt="Author event photo"/>
          <img src={event2} alt="Author event photo"/>          
        </div>
        <div class="column">
          <img src={event3} alt="Author event photo"/>
          <img src={event4} alt="Author event photo"/>          
        </div>
        <div class="column">
          <img src={event5} alt="Author event photo"/>
          <img src={event6} alt="Author event photo"/>          
        </div>
      </div>      
    </div>   
  );
}

export default PreviousEvents;