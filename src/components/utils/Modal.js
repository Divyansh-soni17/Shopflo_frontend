import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Modal = ({ setIsOpen, isOpen, handleRegistration }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`${
        isOpen
          ? "fixed inset-0 flex items-center justify-center backdrop-blur-md backdrop-brightness-75 transition-all duration-300 z-50"
          : "hidden"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative bg-white rounded-lg shadow-md w-full max-w-md mx-auto p-5 z-50">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">
              Registration
            </h3>
            <button
              type="button"
              onClick={closeModal}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div>
            {/* Name input field */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                className="block w-full p-3 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
                required
              />
            </div>
            {/* Email input field */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className="block w-full p-3 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>
            {/* Contact input field */}
            <div className="mb-4">
              <label
                htmlFor="contact"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Contact
              </label>
              <input
                type="tel"
                id="contact"
                value={contact}
                onChange={handleContactChange}
                className="block w-full p-3 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your contact number"
                required
              />
            </div>
            {/* Address input field */}
            <div className="mb-4">
              <label
                htmlFor="address"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={handleAddressChange}
                className="block w-full p-3 text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your address"
                required
              />
            </div>

            {/* Add Review button */}
            <button
              disabled={!name || !email || !contact || !address}
              type="button"
              onClick={handleRegistration}
              className={`${
                !name || !email || !contact || !address
                  ? "cursor-not-allowed opacity-50 font-medium rounded-lg   px-5 py-2.5 text-center "
                  : "text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              }`}
            >
              Confirm Registration
            </button>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 bg-black opacity-0 pointer-events-none"></div>
      <Toaster />
    </div>
  );
};

export default Modal;
