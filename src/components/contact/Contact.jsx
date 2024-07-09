import React from "react";
import "./Contact.css";
const ContactMe = () => {
  return (
    <div className="contact-section">
      <div className="contact-content">
        <div className="neon-title">
          <p>Zadzwoń do mnie</p>
          <h2>111 222 333</h2>
        </div>
        <form className="contact-form">
          <div className="neon-title">
            <p>Wyślij wiadomość e-mail </p>
          </div>
          <label>Wprowadź imię</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your full name"
            required
          />
          <label>Twój numer telefonu</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your phone number"
            required
          />
          <label>Treść wiadomości</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message here"
            required
          ></textarea>
          <div>
            <button type="submit" className="btn-dark-btn">
              Wyślij
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
