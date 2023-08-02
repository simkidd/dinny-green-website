import React from "react";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-top">
        <h2>Contact Us</h2>
      </div>
      <form>
        <div className="form-row">
          <div className="input-group">
            <input type="text" className="form-input" placeholder="Name" />
          </div>
          <div className="input-group">
            <input type="text" className="form-input" placeholder="Email" />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <input type="text" className="form-input" placeholder="Phone" />
          </div>
          <div className="input-group">
            <input type="text" className="form-input" placeholder="Subject" />
          </div>
        </div>

        <div className="form-row">
          <div className="input-group">
            <textarea
              className="form-input"
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="message"
            ></textarea>
          </div>
        </div>

        <div className="btn-row">
          <button className="btn btn-1">Send now</button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
