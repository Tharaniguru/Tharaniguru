// src/pages/Contact.js
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // e.g., service_qwerty
        "your_template_id", // e.g., template_abc123
        form.current,
        "your_public_key"   // e.g., 6C0xYZabc12345
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-12 md:py-24">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
        Contact Me
      </h1>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-lg"
      >
        <div className="mb-4">
          <label className="text-lg text-gray-600 font-semibold mb-2">Your Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="text-lg text-gray-600 font-semibold mb-2">Your Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="text-lg text-gray-600 font-semibold mb-2">Your Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
