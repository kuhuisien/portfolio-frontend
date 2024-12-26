import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "./App.css";
import About from "../pages/About";
import { ThemeProvider } from "../common/contexts/ThemeContext";
import ThemeToggle from "../common/components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-light-50 dark:bg-dark-900 transition-all">
          <Routes>
            <Route path="/" element={<About />} />
            {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>

        <ThemeToggle />
      </Router>
    </ThemeProvider>
  );
}

export default App;
