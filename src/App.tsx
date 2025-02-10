import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import { Experience } from "./components/Experience";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

// **Ensure scrolling positions sections properly**
const ScrollToSection = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // Delay to ensure the page loads before scrolling
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <ScrollToSection />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div id="home" className="scroll-mt-20"><Home /></div>
              <div id="about" className="scroll-mt-20"><About /></div>
              <div id="experience" className="scroll-mt-20"><Experience /></div>
              <div id="skills" className="scroll-mt-20"><Skills /></div>
              <div id="resume" className="scroll-mt-20"><Resume /></div>
              <div id="contact" className="scroll-mt-20"><Contact /></div>
              <Footer />
            </>
          }
        />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
