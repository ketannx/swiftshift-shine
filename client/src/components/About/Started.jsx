import React from "react";

function Started() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-3xl mx-auto flex flex-col items-start">
        <h2 className="text-4xl font-extrabold text-green-700 mb-2 tracking-tight">
          Why We Started
        </h2>
        <div className="w-16 h-1 bg-green-400 mb-6 rounded-full"></div>
        <p className="text-lg text-gray-700 mb-5 font-medium">
          Life is busy, and coming home to a clean, fresh space shouldn't be complicated or expensive.
        </p>
        <p className="text-lg text-gray-700 mb-5 font-medium">
          We began this cleaning service to bring a higher standard of care, reliability, and convenience to our community—making spotless spaces easy and stress-free.
        </p>
        <ul className="text-gray-700 text-base space-y-2 mb-7 list-disc list-inside">
          <li>Friendly, dependable professionals</li>
          <li>Simple booking &amp; transparent pricing</li>
          <li>Consistently spotless results</li>
          <li>Eco-friendly products for a safer home</li>
        </ul>
        <p className="text-base text-gray-600">
          Let us handle the mess, so you can enjoy more of what matters.<br />
          Join our family of happy clients and experience a beautifully clean space—every time.
        </p>
      </div>
    </section>
  );
}

export default Started;