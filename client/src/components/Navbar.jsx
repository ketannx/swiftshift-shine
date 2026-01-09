import React, { useState, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import gsap from "gsap";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const lineRefs = useRef([]);

  const underlineIn = (el) => {
    gsap.to(el, {
      scaleX: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const underlineOut = (el) => {
    gsap.to(el, {
      scaleX: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <nav className="w-full bg-white border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-10 py-3 flex items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-green-700"
        >
          Swift Shift & Shine<span className="text-green-500">.</span>
        </Link>

        {/* Centered Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium mx-auto">
          {navLinks.map((link, i) => (
            <li
              key={link.name}
              className="relative"
              onMouseEnter={() => underlineIn(lineRefs.current[i])}
              onMouseLeave={() => underlineOut(lineRefs.current[i])}
            >
              <Link
                to={link.path}
                className="text-gray-700 hover:text-green-600 transition"
              >
                {link.name}
              </Link>

              {/* Underline */}
              <span
                ref={(el) => (lineRefs.current[i] = el)}
                className="absolute left-0 -bottom-1 h-[2px] w-full bg-green-600 origin-left scale-x-0"
              />
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden ml-auto text-2xl cursor-pointer text-green-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden bg-white border-t border-green-100 ${
          open ? "max-h-80" : "max-h-0"
        } transition-all duration-300`}
      >
        <ul className="flex flex-col gap-4 px-6 py-4 font-medium text-gray-700">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="hover:text-green-600 transition"
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
