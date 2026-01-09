import React from 'react';

function Achivements() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center rounded-3xl bg-white overflow-hidden">
        
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-6 md:p-0 bg-green-50">
          <img
            src="https://www.lung.org/getmedia/f5f10089-436d-4fb2-bd7a-4126fad55196/dusting_OG.jpg?width=1200&height=630&ext=.jpg"
            alt="Our Experience"
            className="rounded-xl shadow-md w-full h-72 object-cover border border-green-100"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start px-6 py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-3 tracking-tight">
            Experience You Can Trust
          </h2>
          <span className="w-12 h-1 bg-green-400 mb-6 rounded-full block"></span>

          <ul className="mb-8 space-y-4 text-gray-700 text-base">
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 bg-green-400 rounded-full"></span>
              Years of hands-on experience in residential & commercial cleaning
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 bg-green-400 rounded-full"></span>
              Trained professionals who focus on detail, hygiene, and care
            </li>
            <li className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 bg-green-400 rounded-full"></span>
              Trusted by families and businesses for consistent quality
            </li>
          </ul>

          <p className="text-gray-600 text-base mb-2">
            At <span className="font-semibold text-green-600">Swift Shift &amp; Shine</span>, we believe true achievement is delivering reliable, high-quality cleaning every single time.
          </p>

          <p className="text-gray-600 text-base">
            Our experience reflects in our work — clean spaces, happy clients, and lasting trust.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Achivements;
