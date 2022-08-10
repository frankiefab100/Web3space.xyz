import React, { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import SubmitForm from "./pages/Submit/SubmitForm";
import Footer from "./components/Footer/Footer";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Newsletter from "./components/Newsletter/Newsletter";
import Featured from "./components/Featured/Featured";

// import DevDaoLogo from "./assets/images/DeveloperDAO.png";
// import ImmunefiLogo from "./assets/images/Immunefi.png";
// import CadenaLogo from "./assets/images/Cadena.png";

// import DevDaoLogoLight from "./assets/images/DeveloperDAO-white.png";
// import ImmunefiLogoLight from "./assets/images/Immunefi-white.png";
// import CadenaLogoLight from "./assets/images/Cadena-white.png";

import useLocalStorage from "use-local-storage";

function App() {
  let defaultTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultTheme ? "dark" : "light",
  );

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme-color", theme);
  }, [theme]);

  return (
    <div className="App">
      <Router>
        <NavBar toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="submit" element={<SubmitForm />} />
        </Routes>

        <Featured />
        <Newsletter />
        <Footer />
        <ScrollButton />
      </Router>
    </div>
  );
}

export default App;
