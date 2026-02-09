import { useState } from "react";

const experiences = [
  {
    company: "Nipralo Technologies",
    role: "Front-End Developer Intern",
    duration: "Oct 2025 - Dec 2025",
    points: [
      "Built responsive React.js layouts and reusable UI components",
      "Developed a library of 10+ reusable components to speed up development",
      "Integrated APIs using TanStack React Query for optimized data handling",
      "Worked with Strapi CMS to manage dynamic content",
    ],
  },
  {
    company: "Analytics Career Connect",
    role: "Frontend Trainee",
    duration: "Jul 2025 - Sep 2025",
    points: [
      "Worked on real-world frontend assignments",
      "Improved UI consistency and responsiveness",
      "Collaborated with mentors on best practices",
    ],
  },
  {
    company: "Personal Projects",
    role: "Frontend Developer",
    duration: "2024 - Present",
    points: [
      "Built multiple portfolio and SaaS-style projects",
      "Focused on performance, accessibility, and clean UI",
      "Experimented with animations and modern UI patterns",
    ],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <p className="text-sm tracking-widest text-primary mb-4">
          WHERE I'VE WORKED
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
          My Experience
        </h2>

        <div className="flex flex-col md:flex-row gap-10">

          {/* LEFT TABS */}
          <div className="md:w-1/4">
            <div className="border-l border-white/10">
              {experiences.map((exp, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-4 py-3 text-sm transition
                    ${
                      active === i
                        ? "text-primary border-l-2 border-primary bg-primary/5"
                        : "text-textSecondary hover:text-white"
                    }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="md:w-3/4">
            <h3 className="text-xl font-semibold text-white mb-1">
              {experiences[active].role}{" "}
              <span className="text-primary">
                @ {experiences[active].company}
              </span>
            </h3>

            <p className="text-sm text-textSecondary mb-6">
              {experiences[active].duration}
            </p>

            <ul className="space-y-4">
              {experiences[active].points.map((point, i) => (
                <li key={i} className="flex gap-3 text-textSecondary">
                  <span className="text-primary mt-1">▸</span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
