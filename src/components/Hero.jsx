import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-24"
    >
      <div className="max-w-4xl text-center">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-sky-400 mb-4"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Harsh Patel
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold text-gray-400 mt-3"
        >
          I build things for the web.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-400 max-w-2xl mx-auto mt-6"
        >
          I’m a frontend developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently focused on
          React, Tailwind CSS, and modern UI.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 border border-sky-400 text-sky-400 rounded-lg hover:bg-sky-400 hover:text-black transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 bg-sky-400 text-black rounded-lg hover:bg-sky-500 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
