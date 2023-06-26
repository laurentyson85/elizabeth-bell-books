import React from "react";
import bottomQuotes from "../images/bottom-quotes.png";
import topQuotes from "../images/top-quotes.png";

function Testimonials() {
  return (
    <div className="testimonialSection">
      <p className="testimonialsTitle"><span style={{fontWeight: "bold"}}>What my readers are saying</span></p>       
      <div className="testimonial">
        <img class="quote" src={bottomQuotes} alt="Bottom Quote Image"/>        
        <div>        
          <p>I am a mom of five kids ages 6 and under. I have the first book,&nbsp;<i>Bedtime for Dragons</i>, and LOVED that it is 100% kid appropriate, but at the same time, there are a few "big" words that will also make the book fun for an older child and for the parents that read them 1,001 times. Some children's books are mind numbingly simplistic. This is not that! </p>
          <p>Kristin Leonovich,&nbsp;<i>South Carolina, USA</i></p>
        </div>
        <img class="quote" src={topQuotes} alt="Top Quote Image"/>   
      </div>
      <div className="testimonial">
        <img class="quote" src={bottomQuotes} alt="Bottom Quote Image"/>
        <div>       
          <p>&nbsp;<i>Bedtime for Dragons</i>&nbsp;is wonderfully written and beautifully illustrated! My 2-year old son and I have a great time reading the book - he loves the part where the Little Pink Dragon eats all the snacks! The book really caters to his active imagination while still motivating the importance of bedtime. Thoroughly impressed and will definitely be looking for more from Elizabeth Bell!</p>
          <p>Langston Norman,&nbsp;<i>Georgia, USA</i></p>
        </div> 
        <img class="quote" src={topQuotes} alt="Top Quote Image"/>   
      </div> 
    </div>
  );
}

export default Testimonials;