import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-700 p-4 md:p-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link
          to="/"
          className="text-white font-bold text-3xl mb-4 md:mb-0 md:mr-4"
        >
          TripAdvisor
        </Link>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/explore"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Explore
          </Link>

          <Link
            to="/contact"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
