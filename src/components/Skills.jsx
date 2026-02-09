import React, { useState } from "react";
import ProgressBar from "./skills/ProgressBar";

function Skills() {
  const [data, setData] = useState([
    { lang: "HTML5", percent: 95 },
    { lang: "CSS3", percent: 90 },
    { lang: "Javascript", percent: 85 },
    { lang: "React", percent: 85 },
    { lang: "Tailwind CSS", percent: 70 },
    { lang: "Git & Github", percent: 60 },
    { lang: "REST APIs", percent: 80 },
  ]);

  return (
    <div className="px-6 py-32  bg-[#171A21]  ">
      <section className="m-w-6xl mx-auto h-screen ">
        <div className="flex items-center gap-2 text-center flex-col">
          <h1 className="text-5xl font-semibold tracking-tight">
            Skills & Expertise
          </h1>
          <h3 className="text-lg font-normal tracking-tight text-[#B3AA98] ">
            Technologies and tools I use to bring ideas to life
          </h3>
        </div>

        <div className="center-div flex mt-15 items-center justify-center gap-10">
          <div className="technical-skills w-[32vw] rounded-xl px-4 py-6 border border-zinc-500/30  bg-[#191D24]  h-[70vh]  mb-2">
            <h4 className="text-[1.190rem] font-semibold mb-4">
              Technical Skills
            </h4>
            {data.map((item, index) => (
              <ProgressBar data={item} />
            ))}
          </div>
          <div className="right-div flex gap-10 h-[70vh] flex-col ">
            <div className="other-skills flex flex-col items-start  justify-center gap-2  bg-[#191D24] border border-zinc-500/30 h-[20vh] px-8 w-[35vw] rounded-xl py-20 ">
              <h3 className="text-[1.070rem] mb-2 tracking-tight font-semibold">
                Other Skills
              </h3>
              <div className="flex gap-5 rounded-md items-center justify-start ">
                <h3>Responsive Design</h3>
                <h3>UI/UX Principles</h3>
                <h3>Framer Motion</h3>
              </div>
              <div className="flex gap-5   rounded-md  items-center justify-start">
                <h3>Next.js</h3>
                <h3>Node.js Basics</h3>
                <h3>Problem Solving</h3>
              </div>
            </div>
            <div
              className="currently-learning flex flex-col items-start  justify-center 
            gap-4 bg-[#191D24] border border-zinc-500/30 h-[20vh] px-8 w-xl rounded-xl py-20  "
            >
              <h3 className="text-[1.070rem] tracking-tight font-semibold">
                Currently Learning
              </h3>

              <h5>
                Always expanding my skill set with the latest technologies
              </h5>

              <div className="flex gap-5  rounded-md items-center justify-start ">
                <span className="border-2 border-dashed text-[#e86241] border-[#D2654A] rounded-full px-3 py-1 ">
                  Next.js
                </span>
                <span className="border-2 border-dashed text-[#e86645] border-[#D2654A] rounded-full px-3 py-1 ">
                  Typescript
                </span>
                <span className="border-2 border-dashed text-[#D2654A] border-[#D2654A] rounded-full px-3 py-1 ">
                  Testing
                </span>
                <span className="border-2 border-dashed text-[#D2654A] border-[#D2654A] rounded-full px-3 py-1 ">
                  DSA
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
