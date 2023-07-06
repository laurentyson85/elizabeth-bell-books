import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import timeForDragons from "../../images/time-for-dragons.png";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [sent, setSent] = useState(false);

  function handleForm(event){
    setFormData({
      ...formData, [event.target.name]:event.target.value
    })
  }
 
  function handleSubmit(event){
    event.preventDefault()

    emailjs
      .send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
        },
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        setFormData({
          name: "",
          email: "",
          message: "",
        })
      )
      .then(setSent(true))
      .then(
          setTimeout(() => {
            setSent(false)
          }, 5000)
        )
      };

    

  return (
    <div className="contact">
      <img className="time" src={timeForDragons} alt="TIme for Dragons image"/>
      <p className="contactTitle">Contact the Author</p>
      <p className="contactText">To place an order for an autographed book, a bookmark, to hire me for an event, or to ask me any questions, just use this form. I would love to hear from you!</p>
      <form className="cf" onSubmit={handleSubmit}>
        <div className="half left cf">
          <input className="fields" required type="text" name="name" placeholder="Name" value={formData.name} onChange={handleForm}/>
          <input className="fields" required type="email" name="email" placeholder="Email address" value={formData.email} onChange={handleForm} />
        </div>
        <div className="half right cf">
          <textarea required type="text" placeholder="Message..." name="message" value={formData.message} onChange={handleForm}></textarea>
        </div>
        <input className="submit" type="submit" value="Submit" id="input-submit" />
      </form>
      { sent ? <p className="successMessage">Message sent! 🎉 I'll be in touch with you soon.</p> : null }      
    </div>
  );
}

export default Contact;