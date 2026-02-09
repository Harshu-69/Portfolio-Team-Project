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
    role: "Frontend Intern",
    duration: "2024",
    points: ["Worked on UI improvements and dashboards"],
  },
  {
    company: "Personal Projects",
    role: "Frontend Developer",
    duration: "Ongoing",
    points: ["Built multiple React & Next.js projects"],
  },
];

const Experience = () => {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="py-28 px-6 bg-[#0b0f17] text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <p className="text-sm tracking-widest text-[#E76E50] mb-2">
          WHERE I'VE WORKED
        </p>
        <h2 className="text-4xl font-bold mb-16">My Experience</h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Tabs */}
          <div className="relative md:w-1/4">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-white/10" />
            <ul className="flex flex-col gap-1">
              {experiences.map((exp, i) => (
                <li
                  key={i}
                  onClick={() => setActive(i)}
                  className={`cursor-pointer px-6 py-3 text-sm transition
                    ${
                      active === i
                        ? "bg-white/5 text-[#E76E50] border-l-2 border-[#E76E50]"
                        : "text-gray-400 hover:bg-white/5"
                    }`}
                >
                  {exp.company}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">
              {experiences[active].role}{" "}
              <span className="text-[#E76E50]">
                @ {experiences[active].company}
              </span>
            </h3>

            <p className="text-sm text-gray-400 mb-6">
              {experiences[active].duration}
            </p>

            <ul className="space-y-4">
              {experiences[active].points.map((point, i) => (
                <li key={i} className="flex gap-3 text-gray-300">
                  <span className="text-[#E76E50] mt-1">▸</span>
                  <span>{point}</span>
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
