import { NavLink } from "react-router-dom";
import { ROUTING } from "../../constants/routing";

const DesktopNavigation = () => {
  return (
    <nav className="hidden md:block">
      <div className="space-x-6 text-sm font-medium text-gray-900 dark:text-white">
        {ROUTING.map((x) => (
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline hoverable" : "hoverable"
            }
            {...x}
          >
            {x.displayText}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default DesktopNavigation;
