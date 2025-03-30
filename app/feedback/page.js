"use client"
import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
export default function Feedback() {

  const [Input, setInput] = useState('');

  function handleInputField(e) {
    setInput(e.target.value);
  }

  function handleEnterKey(inputValue) {
    console.log("Enter key pressed! Current input value:", inputValue);

  }

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Sending...");

    // Simulate form submission

    try {
      // Send POST request to your API endpoint
      const response = await axios.post('http://localhost:8080/api/message', formData);

      // If the request is successful, reset form and show success status
      setIsSubmitting(false);
      setStatus("Message Sent!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      // If there is an error, show error status
      setIsSubmitting(false);
      setStatus("Error sending message!");
      console.error('Error sending message:', error);
    }
  };


  return (<div>
    <Navbar Input={Input} handleInputField={handleInputField} handleEnterKey={handleEnterKey} />
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-8">
      <div className="w-full max-w-4xl text-center space-y-8 mt-30 ">
        <h1 className="text-5xl font-extrabold tracking-wide text-amber-500">
          Contact Us
        </h1>
        <p className="text-lg text-gray-400">
          Have a question or need assistance? Get in touch with us! We are here to help you.
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl m-auto bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-gray-300 mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-gray-300 mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-gray-300 mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="mb-4 flex justify-center">
            <button
              type="submit"
              className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition-all duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>

          {status && (
            <div
              className={`mt-4 text-center text-lg font-semibold ${status === "Message Sent!" ? "text-green-400" : "text-red-400"
                }`}
            >
              {status}
            </div>
          )}
        </form>
      </div>

      {/* Contact Information */}
      <div className="w-full max-w-4xl mt-12 text-center">
        <h2 className="text-3xl font-semibold text-amber-500 mb-4">Contact Info</h2>
        <p className="text-lg text-gray-400">
          Have a quick question? Feel free to reach out to us via the contact details below:
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex justify-center items-center">
            <span className="text-amber-400 mr-4">📧</span>
            <a
              href="mailto:heyshuaib43@gmail.com"
              className="text-lg text-gray-300 hover:text-amber-400"
            >
              heyshuaib43@gmail.com
            </a>
          </div>

          <div className="flex justify-center items-center">
            <span className="text-amber-400 mr-4">📞</span>
            <a
              href="tel:+918979302837"
              className="text-lg text-gray-300 hover:text-amber-400"
            >
              +91 8979302837
            </a>
          </div>
        </div>
      </div>
    </div>

    <footer className="bg-black text-white text-center p-4 mt-8">
      <p>&copy; 2025 Image Search App. All rights reserved.</p>
    </footer>
  </div>)
}