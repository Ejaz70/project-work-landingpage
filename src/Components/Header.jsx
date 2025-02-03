import React from "react";

const Header = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold text-indigo-600 cursor-pointer">Logo </div>
 <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li className=" hover:text-indigo-600">Home</li>
          <li className=" hover:text-indigo-600">Menu</li>
          <li className=" hover:text-indigo-600">About Us</li>
          <li className=" hover:text-indigo-600">Contact</li>
        </ul>

        <div className="hidden md:flex space-x-4">
          <button className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-gray-100">
            Login
          </button>
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-indigo-700">
            Sign Up
          </button>
        </div>

        <div className="md:hidden">
          <button className="text-gray-700 text-2xl">&#9776;</button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
