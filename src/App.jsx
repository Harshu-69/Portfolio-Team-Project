import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AllProjects from "./components/AllProjects";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const location = useLocation();

  // Locomotive Code for smooth scrolling
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    });

    scroll.update();

    return () => {
      scroll.destroy();
    };
  }, [location]);

  return (
    <div
      id="main"
      data-scroll-container
      className={` transition-colors duration-500 ease-in-out
        ${darkMode ? "bg-[#0b0f17] text-[#b3aa98] " : "bg-[#F5F3EF] text-black"}
      `}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <div data-scroll-section>
              <Hero darkMode={darkMode} />
              <About darkMode={darkMode} setDarkMode={setDarkMode} />
              <Experience />
              <Projects darkMode={darkMode} />
              <Skills darkMode={darkMode} setDarkMode={setDarkMode} />
              <Contact darkMode={darkMode} />
              <Footer darkMode={darkMode} />
            </div>
          }
        />
        <Route path="/projects/all" element={<AllProjects />} />
      </Routes>
    </div>
  );
}
export default App;
