import React from 'react';
import './ContactUs.css'; // Assuming you have a CSS file for styling
import { Element } from 'react-scroll';

const ContactUs = () => {
  return (
    <Element name="contact" className="element">
      <div className="contact-section">
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </Element>
  );
}

export default ContactUs;
