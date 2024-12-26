import { createContext, useState, useEffect } from "react";
import { THEME_KEY, THEME_MODE } from "../constants/localStorage";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // check localStorage or system preference to determine theme on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);

    // if dark theme is saved in localStorage or system preference, use it
    if (
      savedTheme === THEME_MODE.DARK ||
      window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
      document.documentElement.classList.add(THEME_MODE.DARK);
    }
    // default to light theme
    else {
      setIsDarkMode(false);
      document.documentElement.classList.remove(THEME_MODE.DARK);
    }
  }, []);

  // toggle theme function
  const toggleTheme = () => {
    const newTheme = isDarkMode ? THEME_MODE.LIGHT : THEME_MODE.DARK;
    setIsDarkMode(!isDarkMode);
    localStorage.setItem(THEME_KEY, newTheme);
    document.documentElement.classList.toggle(
      "dark",
      newTheme === THEME_MODE.DARK
    );
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
