


import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { SiX } from "react-icons/si"; // X logo

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-white via-purple-50 to-blue-50 text-gray-800 mt-12 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-12">
          
          {/* Logo and Description */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
              <SiX className="text-indigo-600 w-6 h-6" />
              <span className="text-xl font-bold text-indigo-700">TheBookHaven</span>
            </div>
            <p className="text-gray-600 text-sm max-w-xs mx-auto sm:mx-0">
              YourSite is your go-to platform for amazing books and resources. Stay connected and explore our latest content.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-2 text-center sm:text-left">
            <h3 className="font-semibold text-indigo-700">Quick Links</h3>
            <a href="/" className="hover:text-indigo-500 transition-colors">Home</a>
            <a href="/about" className="hover:text-indigo-500 transition-colors">About Us</a>
            <a href="/books" className="hover:text-indigo-500 transition-colors">Books</a>
            <a href="/contact" className="hover:text-indigo-500 transition-colors">Contact</a>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center sm:items-start space-y-2">
            <h3 className="font-semibold text-indigo-700">Follow Us</h3>
            <div className="flex space-x-4 mt-1">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 transition-colors"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700 transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-200 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} TheBookHaven. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

