import React from "react";
import TimeGallery from "./TimeGallery";
import PreviousEvents from "./PreviousEvents";

function Gallery() {

  return (   
    <div className="gallery">        
      <TimeGallery />
      <PreviousEvents />
    </div>  
  );
}

export default Gallery;