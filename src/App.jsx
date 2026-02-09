import { Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AllProjects from "./components/AllProjects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-[#111] text-white">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              
              <Experience />
              <Projects />
              <Skills />
              <Contact />
            </>
          }
        />

        <Route path="/projects/all" element={<AllProjects />} />
      </Routes>
    </div>
  );
}

export default App;
