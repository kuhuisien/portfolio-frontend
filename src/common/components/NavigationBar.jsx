import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="bg-transparent py-4 fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-end items-center max-w-7xl mx-auto px-6">
        <div className="space-x-6 text-sm font-medium text-gray-900 dark:text-white">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline hoverable" : "hoverable"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? "underline hoverable" : "hoverable"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline hoverable" : "hoverable"
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
