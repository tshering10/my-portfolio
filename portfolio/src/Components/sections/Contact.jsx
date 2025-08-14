import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPersonLinesFill } from "react-icons/bs";
import { RevealOnScroll } from "./RevealOnScroll";
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID, 
        import.meta.env.VITE_TEMPLATE_ID, 
        e.target, 
        import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Something went wrong. Please try again!"));
  };
  return (
    <section
      id="contact"
      className="min-h-screen py-16 sm:py-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-4 lg:px-8">
        <RevealOnScroll>
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-transparent bg-clip-text mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg sm:text-xl">
              Let's build something great together.
            </p>
          </div>

          <div className="flex justify-center">
            <form
              action=""
              className="w-full max-w-lg space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                  placeholder="Your Name"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  className="w-full px-3 sm:px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 transform hover:scale-105"
                  placeholder="Write your message."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                ></textarea>
              </div>

              <div className="flex justify-center pt-2 sm:py-4">
                <button
                  type="submit"
                  className="text-white py-3 px-6 rounded-full font-medium relative transition-all duration-300 transform hover:scale-105 hover:bg-blue-600 border bg-blue-500 border-none"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
