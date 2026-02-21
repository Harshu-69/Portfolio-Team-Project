import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);

  console.log(darkMode);

  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={` transition-colors duration-500 ease-in-out
        ${
          darkMode
            ? "fixed top-0  left-0 w-full z-50  bg-[#101318] backdrop-blur border-b border-white/10"
            : "fixed top-0  left-0 w-full z-50   bg-white  backdrop-blur border-b border-white/10"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold ">
          Harsh<span className="text-sky-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center justify-center gap-8 text-sm font-medium ">
          {links.map((link) => (
            <li key={link.name}>
              <a href={link.href} className=" transition">
                {link.name}
              </a>
            </li>
          ))}
          <NavLink href="" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FiSun className="text-lg"   /> : <FiMoon className="text-lg" />}
          </NavLink>
        </ul>

        {/* Mobile Button */}
        <button className="md:hidden " onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/90 px-6 pb-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block py-2 font-medium  "
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
