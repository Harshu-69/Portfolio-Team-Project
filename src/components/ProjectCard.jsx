import { motion, scale } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  const parent = {
    hover: { y: -6 },
  };

  const image = {
    hover: { scale: 1.04 },
  };

  return (
    <motion.div
      whileHover="hover"
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-[#111827] group rounded-2xl  overflow-hidden border border-white/10 hover:border-[#D2654A]/50 border-white/10"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          variants={{
            hover: { scale: 1.04 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-full  h-56 object-cover  "
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <p className="text-xs text-[#D2654A] tracking-widest">{project.type}</p>

        <h3 className="text-lg transition-colors duration-300 group-hover:text-[#D2654A] font-semibold text-white hover:text-[#D2654A]  ">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400">{project.desc}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-white/5 text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Icons */}
        <div className="flex gap-4 pt-4">
          <a className="p-2 rounded-full bg-white/5 hover:bg-orange-500 transition">
            <FiGithub />
          </a>
          <a className="p-2 rounded-full bg-white/5 hover:bg-orange-500 transition">
            <FiExternalLink />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
