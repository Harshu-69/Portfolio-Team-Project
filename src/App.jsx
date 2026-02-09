import Contact from "./components/Contact";
import Experience from "./components/Experience";

import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-[#111] text-white">
      <Experience />
      {/* <Navbar /> */}
      {/* <Hero /> */}
      <Projects />
      <Skills />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
