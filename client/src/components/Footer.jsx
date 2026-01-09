import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-green-700 text-white">
      <div className="max-w-7xl mx-auto px-10 py-10 grid gap-8 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold">
            Swift Shift & Shine<span className="text-green-300">.</span>
          </h2>
          <p className="text-green-100 mt-3 text-sm leading-relaxed">
            Delivering smart, sustainable and modern solutions that help
            businesses grow with confidence.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-green-100">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect</h3>
          <div className="flex gap-4 text-2xl text-green-200">
            <a href="https://www.instagram.com/swiftshiftshine?igsh=MTdmNHI1ZmdmczhxMQ==" className="hover:text-white transition">
              <FaInstagram />
            </a>
            <a href="https://www.facebook.com/share/19ArjtZdAj/?mibextid=wwXIfr" className="hover:text-white transition">
              <FaSquareFacebook />
            </a>
            <a href="https://youtube.com/@swiftshiftshine?si=b1Uc8J_lWvpOsGe_" className="hover:text-white transition">
              <FaYoutube />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-600 text-center py-4 text-sm text-green-200">
        © {new Date().getFullYear()} Swift Shift & Shine. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
