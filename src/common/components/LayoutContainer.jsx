import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const LayoutContainer = ({ children }) => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={
        "flex flex-col h-screen " +
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
