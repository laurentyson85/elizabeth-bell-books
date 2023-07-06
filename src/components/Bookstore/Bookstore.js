import React from "react";
import playtimeBookCover from "../../images/playtime-book-cover.jpeg";
import bedtimeBookCover from "../../images/bedtime-book-cover.jpeg";
import bedtimeBookmark1 from "../../images/bedtime-bookmark1.png";
import bedtimeBookmark2 from "../../images/bedtime-bookmark2.png";
import { Link } from "react-router-dom";

function Bookstore() {

  return (  
    <>
    <div className="bookstore">     
      <p className="bookstoreTitle">To purchase an autograpghed book or a bookmark, please&nbsp;<Link className= "textLink" to="/contact"> contact me!</Link></p> 
      <div className="bookstoreWrap">       
        <div class="bookstoreRow">          
          <div className="bookstoreGallery">
            <img src={bedtimeBookCover} alt="Author event photo" />
            <p className="desc"> <i>Bedtime for Dragons</i>&nbsp; hardcover</p>
            <p className="desc">Autograpghed $20.00</p>
          </div>               
          <div className="bookstoreGallery">
            <img src={playtimeBookCover} alt="Author event photo"/>
            <p className="desc"><i>Playtime for Dragons</i>&nbsp; hardcover</p>
            <p className="desc">Autograpghed $20.00</p>
          </div>
        </div>        
        <div className="bookstoreRow">
          <div className="bookstoreGallery">
            <img src={bedtimeBookmark1} alt="Author event photo"/>
            <p className="desc">Bookmark</p>
            <p className="desc">$2.00</p>
          </div>            
          <div className="bookstoreGallery">
            <img src={bedtimeBookmark2} alt="Author event photo"/>
            <p className="desc">Bookmark</p>
            <p className="desc">$2.00</p>
          </div>
        </div>
      </div> 
    </div>   
    </>    
  );
}

export default Bookstore;