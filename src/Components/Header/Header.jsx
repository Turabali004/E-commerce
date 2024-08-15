


import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClasses =
    "px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out";
  const activeClass = "text-blue-600 bg-white shadow-md";
  const inactiveClass =
    "text-gray-700 hover:text-blue-600 hover:bg-gray-100 hover:shadow-md";

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <NavLink className="text-white text-2xl font-extrabold underline">
             My-Store
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink
                to="/product-listing"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? activeClass : inactiveClass}`
                }
                title="View all available products"
              >
                Products
              </NavLink>
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? activeClass : inactiveClass}`
                }
                title="View your shopping cart"
              >
                Cart
              </NavLink>
              <NavLink
                to="/admin-panel"
                className={({ isActive }) =>
                  `${linkClasses} ${isActive ? activeClass : inactiveClass}`
                }
                title="Admin dashboard for managing products"
              >
                Admin
              </NavLink>
            </div>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-purple-600 to-blue-600 shadow-md">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/product-listing"
              className={({ isActive }) =>
                `${linkClasses} block ${isActive ? activeClass : inactiveClass}`
              }
              title="View all available products"
            >
              Products
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `${linkClasses} block ${isActive ? activeClass : inactiveClass}`
              }
              title="View your shopping cart"
            >
              Cart
            </NavLink>
            <NavLink
              to="/admin-panel"
              className={({ isActive }) =>
                `${linkClasses} block ${isActive ? activeClass : inactiveClass}`
              }
              title="Admin dashboard for managing products"
            >
              Admin
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
