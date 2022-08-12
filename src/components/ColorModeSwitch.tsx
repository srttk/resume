import React, { useState } from "react";

export default function ColorModeSwitch() {
  const [colorMode, setColorMode] = useState(
    localStorage.getItem("_colorMode") || "light"
  );
  function switchDark() {
    const mode = colorMode === "light" ? "dark" : "light";
    setColorMode(mode);
    document.documentElement.classList.toggle("dark");

    localStorage.setItem("_colorMode", mode);
  }

  return (
    <button
      onClick={switchDark}
      className="absolute top-3 right-2 border px-3 py-1 rounded-lg bg-gray-200 bg-opacity-20"
    >
      Dark
    </button>
  );
}
