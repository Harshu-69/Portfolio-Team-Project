import { easeInOut, motion } from "framer-motion";
import "../index.css";
import { FiGithub } from "react-icons/fi";

const Hero = ({ darkMode }) => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 pt-24 sm:pt-32
       border-b border-[#0b0f17]"
    >
      <div className="max-w-3xl md:max-w-4xl text-center">
        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[rgb(231,110,80)] font-['font3'] text-lg sm:text-xl mb-4"
        >
          Hi, my name is
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={
            darkMode
              ? "sm:text-5xl md:text-8xl font-['font4']  font-extrabold   text-white leading-tight "
              : "sm:text-5xl md:text-8xl font-['font4']  font-extrabold   text-black leading-tight"
          }
        >
          Harsh
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-5xl font-['font1'] font-bold  mt-3 sm:mt-4"
        >
          I build things for the web.
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className=" font-['font3'] text-base  sm:text-xl  max-w-2xl mx-auto mt-6 sm:mt-8 leading-8 text-center "
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
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 sm:px-4 sm:py-2
               bg-[rgb(231,110,80)] text-[#111]
                rounded-lg
               text-lg sm:text-[1.100rem]
               transition hover:bg-[rgb(244,112,75)]"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 sm:px-4 sm:py-2
               bg-transparent text-[rgb(231,110,80)]
               border-2 border-[rgb(231,110,80)] rounded-lg
               text-lg sm:text-[1.100rem]
               hover:bg-[#0b0f17]
               transition"
          >
            Contact Me
          </a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className=""
          >
            <FiGithub></FiGithub>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
