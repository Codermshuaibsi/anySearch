"use client";

import React, { useState } from "react";
import ServiceBox from "../components/ServiceBox";
import Navbar from "../components/Navbar";

export default function Services() {
  const services = [
    {
      title: "Image Search",
      description:
        "Easily search for images across a variety of categories. Simply input a keyword and explore stunning images sourced from Unsplash's vast library.",
    },
    {
      title: "High-Quality Images",
      description:
        "We provide only the highest-quality, royalty-free images for personal or commercial use. Discover premium photos for any project.",
    },
    {
      title: "Image Inspiration",
      description:
        "Whether you need inspiration for a design, a blog, or just browsing for creativity, our platform helps you discover beautiful imagery to spark your ideas.",
    },
    {
      title: "Custom Image Requests",
      description:
        "Need a specific image? We offer a custom request service where you can specify your exact needs, and our team will help you find the perfect match.",
    },
    {
      title: "Image Collections",
      description:
        "We curate image collections for different themes and industries. Browse through collections designed for designers, marketers, and creators.",
    },
    {
      title: "Easy Integration",
      description:
        "Integrate our image search service into your project or platform with ease using our API. Simplify the process of adding beautiful images to your product.",
    },
  ];

    const [Input, setInput] = useState('');
  
    function handleInputField(e) {
      setInput(e.target.value);
    }
  
    function handleEnterKey(inputValue) {
      console.log("Enter key pressed! Current input value:", inputValue);
      // Perform the action you want when Enter is pressed
      // Example: Trigger a search or API call
    }
  

  return (
    <>
    <Navbar  Input={Input} handleInputField={handleInputField} handleEnterKey={handleEnterKey} />
      <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-5xl text-center space-y-8 mt-30">
          <h1 className="text-5xl font-extrabold tracking-wide text-amber-500">
            Our Services
          </h1>
          <p className="text-lg text-gray-400">
            We offer a range of services designed to help you find the perfect image for any need. From high-quality stock photos to inspiration for your next project, we have you covered.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {services.map((service, index) => (
              <ServiceBox
                key={index}
                title={service.title}
                description={service.description}
              />
            ))}
            
          </div>
        </div>
      </div>

      <footer className="bg-black text-white text-center p-4 mt-8">
        <p>&copy; 2025 Image Search App. All rights reserved.</p>
      </footer>
    </>
  );
}
