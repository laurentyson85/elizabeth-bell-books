import React from "react";
import BookstoreButton from "./BookstoreButton";
import AmazonButton from "./AmazonButton";
import BarnesNobleButton from "./BarnesNobleButton";


function PurchaseNote() {
  return (
    <div className="purchaseNote"> 
      <p className="purchaseNoteTitle">How to Purchase</p>
      <div className="purchaseNoteChild-1">
        <p><span style={{fontWeight: "bold"}}>Good news!</span> You can bring the Little Dragons home with you right now! Head to my online bookstore now to place your order for autographed hardcover copies of the &nbsp;<i>Time for Dragons</i>&nbsp; series or matching bookmarks. Let your imagination fly free!
        </p>
        <BookstoreButton />        
      </div>
      <div className="purchaseNoteChild-2">
          <p>You can also order &nbsp;<i>Bedtime for Dragons</i>&nbsp; and &nbsp;<i>Playtime for Dragons</i>&nbsp; on Amazon and Barnes & Noble websites (and many more!) in hardcover and eBook formats. I would appreciate a review afterwards if you end up loving the books as much as I do!</p>
          <p><span style={{fontWeight: "bold"}}>Click a button below to order</span></p>          
      </div>
        <div className="purchaseNoteChild-3">
          <AmazonButton />
          <BarnesNobleButton />
      </div> 
    </div>
  );
}

export default PurchaseNote;