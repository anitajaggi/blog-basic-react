import React, { useState, useEffect } from "react";
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="toggle-icon" onClick={toggleTheme}>
      {theme === "light" ? (
        <FaMoon className="fill" />
      ) : (
        <IoMdSunny className="fill" />
      )}
    </div>
  );
};

export default ThemeToggle;
