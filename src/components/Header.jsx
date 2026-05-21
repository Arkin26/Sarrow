import { Link, useNavigate } from "react-router-dom";
import { FaDiscord, FaTwitter, FaTiktok, FaTwitch } from "react-icons/fa";
import React, { useState } from "react";
import "./Header.css";

const GOLD = "#D4AF37";

export default function Header() {
  const navigate = useNavigate();
  const [showTeamDropdown, setShowTeamDropdown] = useState(false);

  const toggleDropdown = () => setShowTeamDropdown((prev) => !prev);

  return (
    <header
      className="DrukWide sticky top-0 z-50 h-16 sm:h-18 md:h-20 w-full flex items-center bg-white backdrop-blur-sm border-b border-opacity-20"
      style={{ color: GOLD, borderColor: GOLD }}
    >
      {/* Left Menu */}
      <div className="w-1/3 flex justify-start space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 text-[8px] xs:text-[9px] sm:text-[10px] md:text-xs font-light pl-2 sm:pl-4 md:pl-6 lg:pl-10 relative">
        <Link
          to="/about-us"
          className="nav-link relative px-1 sm:px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
          style={{ color: GOLD }}
        >
          ABOUT US
        </Link>

        {/* TEAM with Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="nav-link relative px-1 sm:px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
            style={{ color: GOLD }}
          >
            TEAM
          </button>

          {showTeamDropdown && (
            <div
              className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg p-2 z-50 border"
              style={{ borderColor: GOLD }}
            >
              <Link
                to="/staff"
                className="block px-3 py-1 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors rounded whitespace-nowrap text-xs sm:text-sm"
              >
                STAFF
              </Link>
              <Link
                to="/roster"
                className="block px-3 py-1 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white transition-colors rounded whitespace-nowrap text-xs sm:text-sm"
              >
                ROSTER
              </Link>
            </div>
          )}
        </div>

        <a
          href="https://evo9x.gg/collections/sarrow"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link relative px-1 sm:px-2 py-1 rounded-md transition-all duration-300 hover:-translate-y-0.5 whitespace-nowrap"
          style={{ color: GOLD }}
        >
          SHOP
        </a>
      </div>

      {/* Center Logo */}
      <div className="w-1/3 flex justify-center items-center h-full">
        <Link to="/" className="logo-container relative">
          <img
            src="./images/pink-logo.png"
            alt="Logo"
            className="logo-gold float-animation h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 w-auto relative z-10 transition-all duration-300 hover:scale-110 cursor-pointer"
          />
        </Link>
      </div>

      {/* Right Social Icons */}
      <div className="w-1/3 flex justify-end space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 text-sm sm:text-base md:text-lg lg:text-xl pr-2 sm:pr-4 md:pr-6 lg:pr-10">
        <a
          href="https://discord.com/invite/sarrow"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon p-1 sm:p-1.5 md:p-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          style={{ color: GOLD }}
        >
          <FaDiscord />
        </a>
        <a
          href="https://x.com/sarrowgg?s=21&t=aCb8KZp64yDpoRymZ5sk8w"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon p-1 sm:p-1.5 md:p-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          style={{ color: GOLD }}
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.tiktok.com/@sarrowgg?_t=ZT-8xbcU8V29R0&_r=1" // Replace with your actual handle if needed
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon p-1 sm:p-1.5 md:p-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          style={{ color: GOLD }}
        >
          <FaTiktok />
        </a>

        <a
          href="https://www.twitch.tv/teamsarrow"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon p-1 sm:p-1.5 md:p-2 rounded-lg transition-all duration-300 hover:-translate-y-1 hover:scale-110"
          style={{ color: GOLD }}
        >
          <FaTwitch />
        </a>
      </div>
    </header>
  );
}
