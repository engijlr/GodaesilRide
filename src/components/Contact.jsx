import React from "react";
import "./styles/Contact.css";
import Button from "./Button";

function Contact() {
  return (
    <div className="newsletter-section" id="contact">
      <h3>Subscribe to get update when our app drops </h3>
      <p>
        We'll send you an update notification for you to know we are now live
      </p>
      <form>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="e.g,. email@example.com" />
        <Button text="Join Waitlist" />
      </form>
    </div>
  );
}

export default Contact;
