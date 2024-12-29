import Home from "../../pages/Home";
import About from "../../pages/About";

// to display as item in navigation bar list, define displayText field
export const ROUTING = [
  {
    to: "/",
    displayText: "Home",
    component: <Home />,
  },
  {
    to: "/about",
    displayText: "About",
    component: <About />,
  },
  {
    to: "/projects",
    displayText: "Projects",
    component: <></>,
  },
  { to: "/contact", displayText: "Contact", component: <></> },
];
