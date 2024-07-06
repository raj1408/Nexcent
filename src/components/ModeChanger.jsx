import React, { useState, useEffect } from "react";
import { MdSunny } from "react-icons/md";
import { IoMoonSharp } from "react-icons/io5";
import { HiMiniComputerDesktop } from "react-icons/hi2";

function ModeChanger() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    if (mode === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else if (mode === "dark") {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    } else {
      const userPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (userPrefersDark) {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
      }
    }
  }, [mode]);

  const getButtonClass = (buttonMode) =>
    `text-3xl mx-2 hover:text-green-300 ${
      mode === buttonMode
        ? "text-green-500"
        : "text-slate-500 dark:text-slate-50"
    }`;

  return (
    <div className="flex bg-slate-100 p-3 dark:bg-slate-700">
      <button
        className={getButtonClass("light")}
        onClick={() => setMode("light")}
      >
        <MdSunny />
      </button>
      <button
        className={getButtonClass("dark")}
        onClick={() => setMode("dark")}
      >
        <IoMoonSharp />
      </button>
      <button
        className={getButtonClass("system")}
        onClick={() => setMode("system")}
      >
        <HiMiniComputerDesktop />
      </button>
    </div>
  );
}

export default ModeChanger;
