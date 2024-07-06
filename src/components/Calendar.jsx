import React from "react";

function Calendar() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12 dark:bg-slate-900">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="src\assets\Mobile login-panel.png"
            alt="Illustration"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4 text-gray-600 dark:text-gray-400">
            How to design your site footer like we did.
          </h2>
          <p className="text-gray-600 mb-4 dark:text-gray-200">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse
            eget lorem eu turpis vestibulum pretium. Suspendisse potenti.
            Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
            Quisque vulputate odio neque, eget efficitur libero condimentum id.
            Curabitur id nibh id sem dignissim finibus ac sit amet magna. Tim
            Smith British Dragon Boat Racing Association Meet all customers
          </p>

          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
