import React from "react";
import { NavLink } from "react-router-dom";
import DesktopNavigation from "./DesktopNavigation";
import MobileNavigation from "./MobileNavigation";

const NavigationBar = () => {
  return (
    <header className="fixed bg-gray-50 dark:bg-transparent w-full py-4 px-6 flex justify-between items-center z-50">
      <NavLink
        to="/"
        className={() =>
          "text-xl font-bold text-gray-900 dark:text-white hoverable"
        }
      >
        Huisien
      </NavLink>

      {/* desktop menu */}
      <DesktopNavigation />

      {/* Hamburger Button */}

      {/* Mobile Menu */}
      <MobileNavigation />
    </header>
  );
};

export default NavigationBar;
