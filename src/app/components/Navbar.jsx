import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <div className="bg-gray-800 w-22 sm:w-40 md:w-50 lg:w-60 xl:w-70 flex-none px-4 py-8">
        <ul className="space-y-4 mt-6">
          <li>
            <button
              className="text-white font-bold"
              onClick={() => navigate("/contact")}
            >
              Contact
            </button>
          </li>
          <li>
            <button
              className="text-white font-bold"
              onClick={() => navigate("/dashboard")}
            >
              Dashboard
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-grow bg-gray-200 px-8 py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
