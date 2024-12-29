import { NavLink } from "react-router-dom";
import { useState } from "react";
import { ROUTING } from "../../constants/routing";

const MobileNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <button
        className="text-3xl md:hidden focus:outline-none text-gray-900 dark:text-white"
        onClick={toggleMenu}
      >
        ☰
      </button>

      <div
        className={`fixed inset-0 bg-gray-100 dark:bg-gray-800 p-6 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden h-screen`}
      >
        <button
          className="absolute top-4 right-4 text-2xl text-gray-900 dark:text-white focus:outline-none"
          onClick={toggleMenu}
        >
          ✕
        </button>
        <nav className="flex flex-col justify-center items-center space-y-6 h-full text-gray-900 dark:text-white">
          {ROUTING.map(({ to, displayText }) => (
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline block text-xl" : "block text-xl"
              }
              to={to}
              onClick={toggleMenu}
            >
              {displayText}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default MobileNavigation;
