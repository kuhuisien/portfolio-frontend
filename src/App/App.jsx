import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "./App.css";
import About from "../pages/About";
import { ThemeProvider } from "../common/contexts/ThemeContext";
import ThemeToggle from "../common/components/ThemeToggle";
import ParticleBackground from "../common/components/ParticleBackground";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ParticleBackground />

        <Routes>
          <Route path="/" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
        </Routes>

        <ThemeToggle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
