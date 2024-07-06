import React from "react";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-slate-900 dark:border-gray-600 dark:text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex">
          <img alt=" " src={logo} className="m-2" />
          <div className="text-2xl font-bold">Nexcent</div>
        </div>
        <ul className=" md:flex space-x-6 hidden">
          <li>
            <a href="#home" className="hover:text-green-500 font-semibold">
              Home
            </a>
          </li>
          <li>
            <a href="#service" className="hover:text-green-500 font-semibold">
              Service
            </a>
          </li>
          <li>
            <a href="#feature" className="hover:text-green-500 font-semibold">
              Feature
            </a>
          </li>
          <li>
            <a href="#product" className="hover:text-green-500 font-semibold">
              Product
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              className="hover:text-green-500 font-semibold"
            >
              Testimonial
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-green-500 font-semibold">
              FAQ
            </a>
          </li>
        </ul>
        <div className="hidden sm:flex">
          <a
            href="#login"
            className=" text-green-500 hover:text-black font-semibold dark:hover:text-slate-100"
          >
            Login
          </a>
          <a
            href="#signup"
            className="ml-4 bg-green-500 text-white px-4 py-2 rounded font-semibold hover:bg-green-600"
          >
            Sign Up
          </a>
        </div>
        <div className="text-4xl text-green-500 md:hidden">&#8801;</div>
      </div>
    </nav>
  );
}

export default Navbar;
