import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const LayoutContainer = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        "grid grid-rows-[auto_1fr_auto] h-screen w-full " +
        (isDarkMode
          ? ""
          : "bg-[url('/lightBackground.jpg')] bg-cover bg-center bg-no-repeat")
      }
    >
      {children}
    </div>
  );
};

export default LayoutContainer;
