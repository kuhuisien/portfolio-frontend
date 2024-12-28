import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <header className="row-start-1 py-4 px-6 flex justify-end items-center">
      <nav>
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
      </nav>
    </header>
  );
};

export default NavigationBar;
