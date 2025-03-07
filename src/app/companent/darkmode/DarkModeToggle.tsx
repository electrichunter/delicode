"use client";

import React, { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="px-6 py-3 text-lg font-bold rounded-full transition-all duration-500 ease-in-out transform 
                  bg-gray-900 text-white dark:bg-gray-200 dark:text-gray-900"
      >
        {darkMode ? "Açık Mod" : "Koyu Mod"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
