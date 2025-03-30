"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import axios from "axios";

export default function Home() {
  const [Input, setInput] = useState("");
  const [Page, setPage] = useState(1);
  const [Loading, setLoading] = useState(false);
  const [Images, setImages] = useState([]);
  const [FullImage, setFullImage] = useState(null);

  // Function to handle the input field change
  function handleInputField(e) {
    setInput(e.target.value);
  }

  // Function to trigger on Enter key press
  function handleEnterKey() {
    fetchImages();  // Trigger the fetchImages function on Enter key press
  }

  // Fetch images from the Unsplash API
  const fetchImages = () => {
    if (!Input) return;
    setLoading(true);

    const api = `https://api.unsplash.com/search/photos?page=${Page}&query=${Input}&client_id=cCuJpa6_vb4-yfmCBUVOj0gw1GzMeYiUoHVwQu4iTFY`;

    axios
      .get(api)
      .then((response) => {
        setImages(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
        setLoading(false);
      });
  };

  // Fetch data when Input or Page changes
  useEffect(() => {
    fetchImages();
  }, [Input, Page]);

  // Open an image in full view
  const openFullImage = (imageUrl) => {
    setFullImage(imageUrl);
  };

  // Close the full image view
  const closeFullImage = () => {
    setFullImage(null);
  };

  return (
    <>
      <Navbar Input={Input} handleInputField={handleInputField} handleEnterKey={handleEnterKey} />

      {/* Full Image Modal */}
      {FullImage && (
        <div
          className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-80 flex justify-center items-center"
          onClick={closeFullImage}
        >
          <img src={FullImage} alt="Full View" className="w-full max-h-full object-contain" />
        </div>
      )}

      <div className="flex flex-col justify-center items-center bg-black w-full min-h-screen p-8">
        <div className="lg:hidden mt-20 input-field w-full max-w-md mb-10 rounded-lg shadow-lg">
          <label htmlFor="input" className="block text-xl font-semibold text-gray-700 text-center">
            Search Image
          </label>
          <input
            type="text"
            id="input"
            onChange={handleInputField}
            onKeyDown={(e) => e.key === "Enter" && handleEnterKey()}
            value={Input}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 transition duration-300"
            placeholder="Enter keywords..."
          />
        </div>

        {/* Image Container */}
        <div className="image-container w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-20 gap-6">
          {Loading ? (
            <div className="text-center w-full col-span-3">
              <p className="text-white">Loading...</p>
              {/* You could add a spinner here */}
            </div>
          ) : Images.length > 0 ? (
            Images.map((image) => (
              <div
                key={image.id}
                className="image-item cursor-pointer"
                onClick={() => openFullImage(image.urls.regular)}
              >
                <img
                  src={image.urls.small}
                  alt={image.alt_description}
                  className="w-full rounded-2xl h-auto"
                />
              </div>
            ))
          ) : (
            !Loading && <p className="text-white col-span-3">No images found</p>
          )}
        </div>

        {/* Pagination Controls */}
        {Images.length > 0 && (
          <div className="flex justify-center space-x-4 mt-8">
            <button
              onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
              disabled={Page === 1}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg"
            >
              Previous
            </button>
            <button
              onClick={() => setPage((prevPage) => prevPage + 1)}
              className="px-4 py-2 bg-amber-500 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black text-white text-center p-4 mt-8">
        <p>&copy; 2025 Image Search App. All rights reserved.</p>
      </footer>
    </>
  );
}
