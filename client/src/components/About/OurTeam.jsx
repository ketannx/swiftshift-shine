import React from "react";
import { Link } from "react-router-dom";

function OurTeam() {
  return (
    <section className="bg-gradient-to-b from-white to-green-50 py-24">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* Clean single image, no overlay */}
        <div className="w-full flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
            alt="Our Team"
            className="rounded-2xl shadow-xl w-full max-w-md h-[370px] object-cover border border-green-100"
          />
        </div>

        {/* Simple Content */}
        <div>
          <h2 className="text-4xl font-extrabold text-green-700 mb-2 tracking-tight">
            Our Team
          </h2>
          <div className="w-16 h-1 bg-green-400 mb-5 rounded-full"></div>
          <p className="text-gray-700 text-lg leading-relaxed mb-5 font-medium">
            Meet our friendly professionals dedicated to delivering sparkling results. We are passionate, attentive, and always committed to your satisfaction.
          </p>
          <ul className="mb-8 space-y-1 text-gray-700 text-base">
            <li>• Trained & background-checked experts</li>
            <li>• Respectful and caring staff</li>
            <li>• Equipped with modern, eco-friendly tools</li>
          </ul>
          <Link
            to="/contact"
            className="inline-block bg-green-600 text-white px-8 py-2.5 rounded-full font-semibold text-base shadow-sm hover:bg-green-700 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
