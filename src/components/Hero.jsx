import React from "react";
import Hero_Image from "../assets/Hero_Section.png";

function Hero() {
  return (
    <div className="container mx-auto py-16 px-6 flex items-center justify-between flex-wrap dark:bg-slate-900 dark:text-slate-100">
      <div className="md:w-1/2 px-8">
        <h1 className="text-5xl font-bold leading-tight mb-4 ">
          Lessons and insights <br />
          <span className="text-green-500">from 8 years</span>
        </h1>
        <p className="text-gray-600 mb-8 dark:text-slate-50">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600">
          Register
        </button>
      </div>
      <div className="md:w-1/2 mt-2">
        <img src={Hero_Image} alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
