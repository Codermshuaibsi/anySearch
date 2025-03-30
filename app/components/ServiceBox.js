"use client";

import React from "react";

const ServiceBox = ({ title, description }) => {
  return (
    <div className="service-card bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <h2 className="text-3xl font-semibold border-b-3 text-amber-400 mb-4">{title}</h2>
      <p className="text-lg text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceBox;
