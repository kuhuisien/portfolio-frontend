import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "./App.css";
import About from "../pages/About";
import { ThemeProvider } from "../common/contexts/ThemeContext";
import NavigationBar from "../common/components/NavigationBar";
import ThemeToggle from "../common/components/ThemeToggle";
import CustomCursor from "../common/components/CustomCursor";
import ParticleBackground from "../common/components/ParticleBackground";
import LayoutContainer from "../common/components/LayoutContainer";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ParticleBackground />

        <LayoutContainer>
          <CustomCursor />
          <NavigationBar />

          <Routes>
            <Route path="/" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
          </Routes>

          <ThemeToggle />
        </LayoutContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
