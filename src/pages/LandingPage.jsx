

import React from "react";
import { useNavigate } from "react-router-dom";
// import Slider from "../Components/Slider/Slider";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center text-white">

      <div className="mb-12 text-center">
        <div className="text-5xl font-bold text-yellow-500">🛍️</div>
        <h1 className="text-4xl font-semibold mt-4 text-yellow-300">
          Welcome to MyShope
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-12">
        <div className="flex flex-col items-center max-w-xs">
          <button
            onClick={() => navigate("/login")}
            className="bg-teal-500 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-teal-600 transition duration-300"
          >
            Login
          </button>
          
        </div>

        <div className="flex flex-col items-center max-w-xs">
          <button
            onClick={() => navigate("/register")}
            className="bg-purple-500 text-gray-900 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
          >
            Register
          </button>
         
        </div>
      </div>
    </div>
  );
}

