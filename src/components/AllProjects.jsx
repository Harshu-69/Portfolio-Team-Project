import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const AllProjects = () => {
  return (
    <section className="py-24 bg-[#101318] text-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">All Projects</h2>
        <p className="text-gray-400 mb-12">
          A complete collection of projects I've worked on.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        <div className="flex mt-10 items-center justify-center">
          <Link
            to="/"
            className="px-8 py-3 rounded-full bg-[#e76e50] flex text-lg items-center gap-2 text-[#111]  font-medium hover:bg-[#d2654ae2] transition-all duration-300"
          >
            <FiArrowLeft className="mt-[0.2rem] text-xl" /> Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
