import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import "./App.css";
import { ThemeProvider } from "../common/contexts/ThemeContext";
import ThemeToggle from "../common/components/ThemeToggle";
import CustomCursor from "../common/components/CustomCursor";
import ParticleBackground from "../common/components/ParticleBackground";
import LayoutContainer from "../common/components/LayoutContainer";
import NavigationBar from "../common/components/NavigationBar";
import { ROUTING } from "../common/constants/routing";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ParticleBackground />

        <LayoutContainer>
          <CustomCursor />

          <NavigationBar />

          <Routes>
            {ROUTING.map(({ to, component }) => (
              <Route key={to} path={to} element={component} />
            ))}
          </Routes>

          <ThemeToggle />
        </LayoutContainer>
      </Router>
    </ThemeProvider>
  );
}

export default App;
