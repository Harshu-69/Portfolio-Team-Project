import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";

const FeaturedProjects = ({ onViewMore }) => {
  return (
    <section className="px-6 py-10 bg-[#0b0f17] text-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm tracking-widest text-[#D2654A] mb-2">
          WHAT I'VE BUILT
        </p>
        <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 mb-12 max-w-xl">
          Handpicked projects showcasing my expertise in building modern,
          scalable web applications.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Link
            to="/projects/all"
           className="px-8 py-3 rounded-full bg-[#e76e50] flex text-lg items-center gap-2 text-[#111]  font-medium hover:bg-[#d2654ae2] transition-all duration-300"
          >
            View More Projects
            <MdArrowOutward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
