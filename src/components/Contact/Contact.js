import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  //to do
  //make form feilds required
  //add success message and clear form
  //utilize state to clear and set form

  // const success = <p>thank you for sending us a message</p>;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert(`message sent successfully... ${result.text}`);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact">
      <p className="contactTitle">Contact Me</p>
      <p className="contactText">To place an order for an autographed book, a bookmark, to hire me for an event, or to ask me any questions, just use this form!</p>
      <form className="cf" ref={form} onSubmit={sendEmail}>
        <div className="half left cf">
          <input className="fields" required type="text" placeholder="Name" name="user_name" />
          <input className="fields" required type="email" placeholder="Email address" name="user_email" />
        </div>
        <div className="half right cf">
          <textarea name="message" required type="text" placeholder="Message..."></textarea>
        </div>
        <input className="submit" type="submit" value="Submit" id="input-submit" />
      </form>
    </div>
  );
}

export default Contact;