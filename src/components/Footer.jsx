import React from "react";

function Footer() {
  return (
    <footer>
      <div className="bg-slate-100 shadow-lg mt-6 text-center max-w-6xl mx-auto rounded p-4 dark:bg-slate-800">
        <h1 className="text-gray-800 text-5xl font-semibold max-w-lg mx-auto pt-5 dark:text-slate-300">
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className="bg-green-500 text-slate-100 px-4 p-1 mt-8 hover:bg-green-600">
          Get Demo &#8594;
        </button>
      </div>
      <div className="w-full bg-gray-900 flex justify-between flex-wrap md:flex-nowrap dark:bg-slate-300">
        <div className="p-2">
          <div className="flex mx-6 mt-12 p-2">
            <img src="src\assets\logo.png" alt="Logo" className="m-2" />
            <h2 className="text-white text-2xl font-bold m-2 dark:text-slate-700">
              Nexcent
            </h2>
          </div>
          <p className="text-white mx-6 p-2 dark:text-slate-700">
            Copyright © 2020 Nexcent ltd.
          </p>
          <div className="flex justify-around mt-3 p-2">
            <img
              className="dark:bg-gray-700 dark:p-1 dark:rounded-lg"
              src="src\assets\Social Icons\Social Icon 1.png"
              alt="Social Icon 1"
            />
            <img
              className="dark:bg-gray-700 dark:p-1 dark:rounded-lg"
              src="src\assets\Social Icons\Social Icon 2.png"
              alt="Social Icon 2"
            />
            <img
              className="dark:bg-gray-700 dark:p-1 dark:rounded-lg"
              src="src\assets\Social Icons\Social Icon 3.png"
              alt="Social Icon 3"
            />
            <img
              className="dark:bg-gray-700 dark:p-1 dark:rounded-lg"
              src="src\assets\Social Icons\Social Icon 4.png"
              alt="Social Icon 4"
            />
          </div>
        </div>
        <div className="flex flex-col mt-12">
          <h4 className="text-white text-xl font-medium mt-2 dark:text-slate-700">
            Company
          </h4>
          <a href="#" className="text-white text-sm mt-2 dark:text-slate-700">
            About Us
          </a>
          <a href="#" className="text-white text-sm mt-2 dark:text-slate-700">
            Blog
          </a>
          <a href="#" className="text-white text-sm mt-2 dark:text-slate-700">
            Contact Us
          </a>
          <a href="#" className="text-white text-sm mt-2 dark:text-slate-700">
            Pricing
          </a>
          <a href="#" className="text-white text-sm mt-2 dark:text-slate-700">
            Testimonials
          </a>
        </div>
        <div className="flex flex-col mt-12">
          <h4 className="text-white text-xl font-medium mt-2 dark:text-slate-700">
            Support
          </h4>
          <a href="#" className="text-white text-sm mt-2 dark:text-slate-700">
            Help Center
          </a>
          <a href="#" className="text-white text-sm mt-2 dark:text-slate-700">
            Terms of service
          </a>
          <a href="#" className="text-white text-sm mt-2 dark:text-slate-700">
            Legal
          </a>
          <a href="#" className="text-white text-sm mt-2 dark:text-slate-700">
            Privacy policy
          </a>
          <a href="#" className="text-white text-sm mt-2 dark:text-slate-700">
            Status
          </a>
        </div>
        <div className="mt-12 mx-6 p-2">
          <h4 className="text-white text-xl font-medium mt-2 dark:text-slate-700">
            Stay up to date
          </h4>
          <input
            type="text"
            placeholder="Your email adress  "
            className="bg-gray-500 mt-4 p-2 placeholder:text-slate-300 rounded-lg dark:bg-slate-700 dark:placeholder:text-gray-400 dark:text-white"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
