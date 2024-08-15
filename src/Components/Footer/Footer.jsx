

import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const linkClasses = "px-3 py-2 text-sm font-medium";
  const activeClass = "text-orange-500";
  const inactiveClass = "text-gray-400 hover:text-orange-500";

  return (
    <footer className="bg-gray-900 text-gray-200 shadow-inner ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-xl font-bold text-orange-500">
              E-Commerce App
            </h2>
            <p className="mt-4 text-gray-400">
              Your one-stop shop for all your needs.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center space-y-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-300">
                Quick Links
              </h3>
            </div>
            <div>
              <NavLink
                to="/product-listing"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? activeClass : inactiveClass}`
                }
              >
                Products
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? activeClass : inactiveClass}`
                }
              >
                Cart
              </NavLink>
              <NavLink
                to="/admin-panel"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? activeClass : inactiveClass}`
                }
              >
                Admin
              </NavLink>
            </div>
          </div>

          {/* Social Media Links */}
          {/* <div>
            <h3 className="text-lg font-semibold text-gray-300">Follow Us</h3>
            <div className="mt-4 flex space-x-6">
              <a
                href="https://github.com/IkramCode/1st-Internship/tree/main/Final-Project"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammd-ikram-ul-haq-114b16317/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com/IkramUl72993259"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-orange-500 transition duration-300"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
            </div>
          </div> */}
        </div>

       
      </div>
    </footer>
  );
}
