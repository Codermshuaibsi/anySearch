"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";

export default function About() {
  const [Input, setInput] = useState('');

  function handleInputField(e) {
    setInput(e.target.value);
  }

  function handleEnterKey(inputValue) {
    console.log("Enter key pressed! Current input value:", inputValue);
    // You can trigger any action here when the Enter key is pressed
  }

  return (
    <>
      <Navbar Input={Input} handleInputField={handleInputField} handleEnterKey={handleEnterKey} />
      <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center py-8 px-4 sm:px-8">
        <div className="w-full max-w-4xl text-center space-y-6 mt-30">
          <h1 className="text-5xl font-extrabold tracking-wide text-amber-500">About Us</h1>
          <p className="text-lg text-gray-400 mb-6">
            Welcome to our Image Search App. We provide an easy and efficient way to search for beautiful images from the Unsplash API.
          </p>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-amber-400">Our Mission</h2>
          <p className="text-lg text-gray-300">
  If you have any questions, feedback, or just want to say hi, feel free to reach out to us. We&apos;d love to hear from you!
</p>

          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-amber-400">How It Works</h2>
            <p className="text-lg text-gray-300">
              Our app uses the Unsplash API to pull in images based on your search queries. Simply type a keyword or phrase, press enter, and browse through high-quality photos from photographers around the world.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-3xl font-semibold text-amber-400">Contact Us</h2>
            <p className="text-lg text-gray-300">
              If you have any questions, feedback, or just want to say hi, feel free to reach out to us. We’d love to hear from you!
            </p>
            <p className="text-lg text-gray-300">
              Email: <a href="mailto:heyshuaib43@gmail.com" className="text-amber-400 hover:underline">heyshuaib43@gmail.com</a>
            </p>
          </section>
        </div>
      </div>

      <footer className="bg-black text-white text-center p-4 mt-8">
        <p>&copy; 2025 Image Search App. All rights reserved.</p>
      </footer>
    </>
  );
}
