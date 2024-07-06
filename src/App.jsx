import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Client";
import Stats from "./components/Stats";
import Calendar from "./components/Calendar";
import Customers from "./components/Customers";
import Community from "./components/Community";
import Footer from "./components/Footer";
import ModeChanger from "./components/ModeChanger";

function App() {
  return (
    <div className="dark:bg-slate-800">
      <ModeChanger />
      <Navbar />
      <Hero />
      <Clients />
      <Stats />
      <Calendar />
      <Customers />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
