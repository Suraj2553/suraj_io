import React, { useState } from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";
import emailjs from "emailjs-com";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_18t8lup",
        "template_1uz0cgj",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "TcUQXuirVRGMxEaW_"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

          <div className="contact-text-div">
            <a className="contact-detail" href={"tel:" + contactInfo.number}>
              {contactInfo.number}
            </a>
            <br />
            <br />
            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>

        <div className="contact-image-div">
          <img
            alt="Contact"
            src={require("../../assets/images/contactMail.png")}
          />
        </div>
      </div>

      {/* DROP A LINE SECTION */}
      <div className="contact-form-div">
        <h2 className="contact-form-title">Drop a line for me</h2>

        <form onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}
