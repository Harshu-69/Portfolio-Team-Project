import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">
          Harsh<span className="text-sky-400">.</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-gray-300">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-white transition"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
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
              className="block py-2 text-gray-300 hover:text-white"
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
