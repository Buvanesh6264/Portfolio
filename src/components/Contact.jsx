import React, { useState, useRef } from "react";
import "../style/Contact.css";
import { FaHeadset } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    form.current.time = new Date().toLocaleString();

    emailjs
      .sendForm("service_cy3lb6w", "template_rf1i83c", form.current, {
        publicKey: "e6cNkb-WMl2YBJ2UN",
      })
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Thank you for your message!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Oops, something went wrong. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        <FaHeadset className="text-purple-700 text-2xl mr-2" />
        Get in <span className="highlight">Touch</span>
      </h2>
      <div className="contact-wrapper">
        <div className="contact-image">
          <img
            src="https://static.vecteezy.com/system/resources/previews/035/535/362/large_2x/ai-generated-minimalist-ui-illustration-of-a-journalist-writing-an-article-in-a-flat-illustration-style-on-a-white-background-free-photo.jpg"
            alt="Contact illustration"
          />
        </div>

        <div className="contact-form-container">
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {/* <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              required
            /> */}
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <div className="submit-wrapper">
              <button type="submit">
                Submit <span className="send-icon">📤</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
