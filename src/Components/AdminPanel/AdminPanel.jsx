import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const user = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
            <p className="text-gray-700">
               {`Welcome  ${user ? user.username : "user"}`}!
            </p>
            <div className="flex flex-col">
            <button
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/";
              }}
              className="mt-4 py-2 px-4 bg-red-600 text-white font-bold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-transform transform hover:scale-105"
            >
              Logout
            </button>
            <button
              onClick={() => {
                navigate("/order-history");
              }}
              className="mt-4 py-2 px-4 bg-orange-600 text-white font-bold rounded-md shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-transform transform hover:scale-105"
            >
             Your Order History
            </button>
            </div>
          </div>
    </div>
  );
};

export default AdminPanel;