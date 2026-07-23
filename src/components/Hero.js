import React from "react";
import image from "../assets/Hero.webp";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex justify-center p-8">
      <Link
        to="#"
        className="flex w-full max-w-6xl h-[450px] bg-neutral-primary-soft rounded-xl shadow-lg overflow-hidden"
      >
        {/* Left Side */}
        <div className="w-1/2 flex flex-col justify-center p-10">
          <h5 className="mb-4 text-4xl font-bold tracking-tight text-heading">
            The Ultimate E-Book Store.
          </h5>

          <p className="mb-8 text-lg text-body">
            CodeBook is the world's most popular and authoritative source for
            computer science ebooks. Find ratings and access to the newest books
            digitally.
          </p>
          <Link to="/productlist">
            <button
              type="button"
              className="inline-flex items-center w-fit px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Explore eBooks
              <svg
                className="w-5 h-5 ml-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="w-1/2">
          <img src={image} alt="Hero" className="w-full h-full object-cover" />
        </div>
      </Link>
    </div>
  );
};

export default Hero;
