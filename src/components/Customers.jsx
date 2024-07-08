import React from "react";
import Customer_image from "../assets/image 9.png";
import Client1 from "../assets/Client Logos/Client Logo (1).png";
import Client2 from "../assets/Client Logos/Client Logo (2).png";
import Client3 from "../assets/Client Logos/Client Logo (3).png";
import Client4 from "../assets/Client Logos/Client Logo (4).png";
import Client5 from "../assets/Client Logos/Client Logo (5).png";
import Client6 from "../assets/Client Logos/Client Logo (6).png";

function Customers() {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl mx-auto mt-12 dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src={Customer_image}
            alt="Illustration"
            className="w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 text-center md:text-left">
          <p className="text-gray-600 mb-4 dark:text-slate-200">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <h2 className="text-green-500 text-[24px] font-semibold">
            Tim Smith
          </h2>
          <p className="text-gray-600 dark:text-slate-200">
            British Dragon Boat Racing Association Meet all customers.
          </p>
          <div className="flex justify-start flex-wrap">
            <img
              className="mx-2 dark:bg-slate-50 dark:rounded-2xl dark:my-1"
              src={Client1}
              alt="Client 1"
            />
            <img
              className="mx-2 dark:bg-slate-50 dark:rounded-2xl dark:my-2"
              src={Client2}
              alt="Client 2"
            />
            <img
              className="mx-2 dark:bg-slate-50 dark:rounded-2xl dark:my-2"
              src={Client3}
              alt="Client 3"
            />
            <img
              className="mx-2 dark:bg-slate-50 dark:rounded-2xl dark:my-2"
              src={Client4}
              alt="Client 4"
            />
            <img
              className="mx-2 dark:bg-slate-50 dark:rounded-2xl dark:my-2"
              src={Client5}
              alt="Client 5"
            />
            <img
              className="mx-2 dark:bg-slate-50 dark:rounded-2xl dark:my-2"
              src={Client6}
              alt="Client 6"
            />
            <a
              href="#"
              className="text-green-500 font-medium text-lg hover:text-green-600"
            >
              Meet all the customers &#8594;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
