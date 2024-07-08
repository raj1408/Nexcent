import React from "react";
import Client1 from "../assets/Client Logos/Client Logo (1).png";
import Client2 from "../assets/Client Logos/Client Logo (2).png";
import Client3 from "../assets/Client Logos/Client Logo (3).png";
import Client4 from "../assets/Client Logos/Client Logo (4).png";
import Client5 from "../assets/Client Logos/Client Logo (5).png";
import Client6 from "../assets/Client Logos/Client Logo (6).png";
import Community1 from "../assets/Community/Community Icon 1.png";
import Community2 from "../assets/Community/Community Icon 2.png";
import Community3 from "../assets/Community/Community Icon 3.png";

function Client() {
  return (
    <div className="bg-gray-100 py-16 dark:bg-slate-800 dark:text-slate-300">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Clients</h2>
        <p className="text-gray-600 mb-12 dark:text-slate-200">
          We have been working with some Fortune 500+ clients
        </p>
        <div className="flex justify-around mb-12">
          <img
            src={Client1}
            alt="Client 1"
            className="h-12 dark:bg-slate-50 dark:p-1 dark:rounded-md"
          />
          <img
            src={Client2}
            alt="Client 2"
            className="h-12 dark:bg-slate-50 dark:p-1 dark:rounded-md"
          />
          <img
            src={Client3}
            alt="Client 3"
            className="h-12 dark:bg-slate-50 dark:p-1 dark:rounded-md"
          />
          <img
            src={Client4}
            alt="Client 4"
            className="h-12 dark:bg-slate-50 dark:p-1 dark:rounded-md"
          />
          <img
            src={Client5}
            alt="Client 5"
            className="h-12 dark:bg-slate-50 dark:p-1 dark:rounded-md"
          />
          <img
            src={Client6}
            alt="Client 6"
            className="h-12 md:flex hidden dark:bg-slate-50 dark:p-1 dark:rounded-md"
          />
        </div>
        <h3 className="text-xl font-semibold mb-4 sm:text-4xl sm:max-w-xl text-center text-gray-800 sm:mx-auto dark:text-slate-300">
          Manage your entire community in a single system
        </h3>
        <p className="text-gray-600 mb-8 sm:text-xl dark:text-slate-400">
          Who is Nexcent suitable for?
        </p>
        <div className="flex sm:justify-around flex-wrap">
          <div className="sm:max-w-xs mt-3">
            <img
              src={Community1}
              alt="Community Icon 1"
              className="mx-auto dark:bg-slate-50 dark:p-1 dark:rounded-3xl"
            />
            <h4 className="font-bold sm:text-xl">Membership Organisations</h4>
            <p className="text-gray-600 sm:mt-3 dark:text-slate-400">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
          <div className="sm:max-w-xs mt-3">
            <img
              src={Community2}
              alt="Community Icon 2"
              className="mx-auto dark:bg-slate-50 dark:p-1 dark:rounded-3xl"
            />
            <h4 className="font-bold sm:text-xl">National Associations</h4>
            <p className="text-gray-600 sm:mt-3 dark:text-slate-400">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
          <div className="sm:max-w-xs mt-3">
            <img
              src={Community3}
              alt="Community Icon 3"
              className="mx-auto dark:bg-slate-50 dark:p-1 dark:rounded-3xl"
            />
            <h4 className="font-bold sm:text-xl">Clubs And Groups</h4>
            <p className="text-gray-600 sm:mt-3 dark:text-slate-400">
              Our membership management software provides full automation of
              membership renewals and payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Client;
