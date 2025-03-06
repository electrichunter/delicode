"use client";

import React, { useState, useEffect } from "react";

const DarkModeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "rgb(34, 34, 34)" : "rgb(240, 240, 240)";
    document.body.style.transition = "background-color 0.6s ease-in-out"; // Arka planın yavaşça değişmesi için.
  }, [darkMode]);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={toggleDarkMode}
        style={{
          backgroundColor: darkMode ? "rgb(240, 240, 240)" : "rgb(34, 34, 34)",
          color: darkMode ? "rgb(34, 34, 34)" : "rgb(240, 240, 240)",
          border: "none",
          padding: "12px 24px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          borderRadius: "30px",
          transition: "background-color 0.5s ease-in-out, color 0.5s ease-in-out, transform 0.2s ease-in-out",
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")} // Butona basınca küçülme efekti
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // Basılı bırakınca normale dönme
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} // Fare butondan çıkarsa normale dönme
      >
        {darkMode ? "Açık Mod" : "Koyu Mod"}
      </button>
    </div>
  );
};

export default DarkModeToggle;
