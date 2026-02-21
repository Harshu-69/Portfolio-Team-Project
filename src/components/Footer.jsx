import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";

function Footer({ darkMode }) {
  return (
    <footer
      className={
        darkMode
          ? "h-20 w-full z-50 border-t  bg-[#101318] backdrop-blur  border-white/10"
          : "h-20 w-full z-50 border-t    bg-white  backdrop-blur border-black/10"
      }
    >
      <div className="max-w-7xl mx-auto my-2 px-6 py-4 flex justify-between items-center">
        <ul className="flex items-center justify-center gap-8 text-sm text-gray-300">
          <FiGithub className=" text-2xl  text-gray-500 " />
          <FiLinkedin className="text-2xl  text-gray-500 " />
        </ul>

        <h1 className="text-base text-[#b3aa98] tracking-tight">
          Designed & Built with ❤️ by Harsh
        </h1>

        <p
          className={
            darkMode
              ? "text-[.900rem] text-white font-bold tracking-tight"
              : "text-[.900rem] text-black font-bold tracking-tight"
          }
        >
          <span className="text-[#E76E50] text-base tracking-tighter font-extrabold ">&lt;</span>dev
          <span className="text-[#E76E50] text-base tracking-tighter font-extrabold">/&gt;</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
