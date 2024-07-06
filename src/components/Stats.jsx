import React from "react";
import CountUp from "react-countup";

function Stats() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center dark:bg-slate-700">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-12 dark:bg-slate-800">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="src\assets\Body.png"
              alt="Illustration"
              className="w-full h-auto"
            />
          </div>
          <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-4 text-gray-600 dark:text-slate-300">
              The unseen of spending three years at Pixelgrade
            </h2>
            <p className="text-gray-600 mb-4 dark:text-slate-200">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 w-full py-12 mt-12 lg:flex justify-around flex-wrap dark:bg-gray-800">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-gray-600 font-semibold text-3xl px-4 lg:px-20 dark:text-slate-300">
            Helping a local
            <br />
            <span className="text-green-600">business reinvent itself</span>
          </h2>
          <p className="px-4 lg:px-20 text-gray-500 mt-2 dark:text-slate-300">
            We reached here with our hard work and dedication.
          </p>
        </div>
        <div className="max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-8 lg:w-1/2 mt-3 mx-auto">
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-2xl font-bold text-green-600 flex items-center">
              <img
                src="src/assets/Achievements/Achievements Icon 1.png"
                alt="Stats 1"
                className="mx-2"
              />
              <CountUp end={2245341} duration={2.5} separator="," />
            </div>
            <div className="text-gray-600 text-justify sm:text-left dark:text-slate-300">
              Members
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-2xl font-bold text-green-600 flex items-center">
              <img
                src="src/assets/Achievements/Achievements Icon 2.png"
                alt="Stats 2"
                className="mx-2"
              />
              <CountUp end={46328} duration={2.5} separator="," />
            </div>
            <div className="text-gray-600 text-justify sm:text-left dark:text-slate-300">
              Clubs
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-2xl font-bold text-green-600 flex items-center">
              <img
                src="src/assets/Achievements/Achievements Icon 3.png"
                alt="Stats 3"
                className="mx-2"
              />
              <CountUp end={828861} duration={2.5} separator="," />
            </div>
            <div className="text-gray-600 text-justify sm:text-left dark:text-slate-300">
              Event Bookings
            </div>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="text-2xl font-bold text-green-600 flex items-center">
              <img
                src="src/assets/Achievements/Achievements Icon 4.png"
                alt="Stats 4"
                className="mx-2"
              />
              <CountUp end={1926436} duration={2.5} separator="," />
            </div>
            <div className="text-gray-600 text-justify sm:text-left dark:text-slate-300">
              Payments
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
