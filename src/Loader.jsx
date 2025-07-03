// components/Loader.jsx
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-[9999]">
      <img
        src="./images/pink-logo.png" // adjust path as per your logo
        alt="Loading..."
        className="w-24 h-24 animate-spin"
      />
    </div>
  );
}
