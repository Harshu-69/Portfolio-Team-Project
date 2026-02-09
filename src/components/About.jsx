import { motion } from "framer-motion";

const techs = [
  "JavaScript (ES6+)",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "Git & GitHub",
  "Responsive Design",
  "Strapi",
];

const About = () => {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-primary mb-4">
            ABOUT ME
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            A bit about myself
          </h2>

          <p className="text-textSecondary leading-relaxed mb-4">
            Hello! I'm <span className="text-primary">Harsh Patel</span>, a
            frontend developer passionate about building clean, responsive, and
            user-friendly web interfaces.
          </p>

          <p className="text-textSecondary leading-relaxed mb-4">
            I love transforming ideas into real digital experiences using
            modern tools like React, Next.js, and Tailwind CSS. My main focus is
            creating fast, accessible, and visually engaging websites.
          </p>

          <p className="text-textSecondary leading-relaxed mb-8">
            Currently, I'm continuously improving my skills by working on
            projects, exploring new technologies, and following best
            development practices.
          </p>

          {/* Tech Pills */}
          <h4 className="text-white font-semibold mb-4">
            Technologies I work with:
          </h4>

          <div className="flex flex-wrap gap-3">
            {techs.map((tech, i) => (
              <span
                key={i}
                className="px-4 py-1.5 rounded-full border border-primary/30
                text-primary text-sm bg-primary/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-bg/80 border border-white/10 rounded-xl p-6">
              <p className="text-primary text-2xl font-bold">10K+</p>
              <p className="text-textSecondary text-sm mt-1">
                Lines of code
              </p>
            </div>

            <div className="bg-bg/80 border border-white/10 rounded-xl p-6">
              <p className="text-primary text-2xl font-bold">∞</p>
              <p className="text-textSecondary text-sm mt-1">
                Cups of coffee
              </p>
            </div>
          </div>

          {/* Code Card */}
          <div className="bg-[#f5f3ee] rounded-xl p-6 font-mono text-sm shadow-lg">
            <div className="flex gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>

            <pre className="text-gray-800">
{`const developer = {
  name: "Harsh Patel",
  skills: ["React", "JS", "..."],
  passion: "Building cool stuff",
  available: true,
};`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
