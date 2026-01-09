import React from 'react';
import { Link } from 'react-router-dom';

function Ready() {
  return (
    <section className="w-full bg-white py-20 px-4">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 rounded-3xl bg-white/80 overflow-hidden">
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-green-50 h-72 lg:h-96 rounded-3xl">
          <img
            src="https://www.housedigest.com/img/gallery/5-time-saving-dusting-hacks-you-must-try/intro-1658417306.jpg"
            alt="Dusting hack"
            className="w-full h-72 lg:h-96 object-cover object-center rounded-2xl shadow-sm border border-green-100"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start px-4 lg:px-10 py-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4 tracking-tight">
            Ready to Book?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-xl">
            Scheduling is easy. Head to our Contact page and our team will quickly answer your questions, confirm availability, and create your perfect package.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 rounded-full bg-green-600 text-white font-semibold text-lg shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-150 focus:ring-2 focus:ring-green-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Ready;