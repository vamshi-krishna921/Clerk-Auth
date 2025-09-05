import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center items-center gap-10 w-full h-20 bg-gray-800 text-white">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <div>
        <NavLink
          to="/login"
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="bg-green-500 text-white px-4 py-2 rounded-md ml-2"
        >
          SignUp
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
