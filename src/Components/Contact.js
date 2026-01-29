import React, { useState } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const SERVICE_ID = "service_gvws0tl";
const TEMPLATE_ID = "template_vZoBYmUO";
const USER_ID = "AGV8PX7GXv93SaySu";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. I'll get back to you soon!",
          confirmButtonColor: "#0b9c8f"
        });
        setFormData({
          user_name: "",
          user_email: "",
          user_message: ""
        });
        setLoading(false);
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Oops, Something Went Wrong",
          text: error.text || "Failed to send message. Please try again.",
          confirmButtonColor: "#0b9c8f"
        });
        setLoading(false);
      });
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">I'd love to hear from you. Send me a message!</p>
        </div>

        <form onSubmit={handleOnSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="user_name" className="form-label">
              <span className="label-text">Full Name</span>
              <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">👤</span>
              <input
                id="user_name"
                type="text"
                name="user_name"
                className="form-input"
                placeholder="John Doe"
                value={formData.user_name}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="user_email" className="form-label">
              <span className="label-text">Email Address</span>
              <span className="required">*</span>
            </label>
            <div className="input-wrapper">
              <span className="input-icon">📧</span>
              <input
                id="user_email"
                type="email"
                name="user_email"
                className="form-input"
                placeholder="john@example.com"
                value={formData.user_email}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="user_message" className="form-label">
              <span className="label-text">Message</span>
              <span className="required">*</span>
            </label>
            <textarea
              id="user_message"
              name="user_message"
              className="form-textarea"
              placeholder="Tell me about your project or just say hello..."
              rows="6"
              value={formData.user_message}
              onChange={handleInputChange}
              required
            />
          </div>

          <button
            type="submit"
            className={`submit-button ${loading ? 'loading' : ''}`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <span className="button-icon">✉️</span>
              </>
            )}
          </button>
        </form>

        <div className="contact-info">
          <p className="info-text">
            Prefer other ways to reach me? Find me on social media or check out my GitHub!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
