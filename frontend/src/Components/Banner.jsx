import React from "react";
import book from "../assets/book.jpg";

export default function Banner() {
  return (
    <div className="container max-w-screen-2xl mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center gap-10 md:gap-20 pt-10 md:pt-20">
      
      {/* LEFT TEXT BLOCK */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          We welcome you.
          <span className="text-pink-600 block">
            Learn Something New Every Day!
          </span>
        </h1>
        <p className="text-lg text-gray-600">
          Explore our handpicked collection of books and enrich your knowledge.
          Learning never ends — dive in and start your journey with us today!
        </p>

        {/* SUBSCRIBE */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 sm:space-x-2 w-full max-w-md mx-auto md:mx-0">
          <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-5 w-5 text-gray-400 mr-2"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c..."/>
              <path d="M15 6.954 8.978 9.86a2.25..." />
            </svg>
            <input
              type="text"
              className="outline-none w-full text-gray-700"
              placeholder="Enter your email"
            />
          </div>

          <button className="px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">
            Subscribe
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE BLOCK */}
      <div className="md:w-1/2">
        <img
          src={book}
          alt="Book"
          className="w-full h-auto max-w-sm rounded-lg shadow-lg mx-auto"
        />
      </div>
    </div>
  );
}
