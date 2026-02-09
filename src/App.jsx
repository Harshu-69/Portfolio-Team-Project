import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";


function App() {
  return (
    <div className="bg-[#020617] text-white">
      <Navbar />
      <Hero />
      <About />      
      <Skills />
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
