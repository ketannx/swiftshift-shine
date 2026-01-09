import React from 'react'

const features = [
  {
    icon: '🧹',
    title: 'Skilled Experts',
    desc: 'Our trained and experienced cleaning professionals deliver detailed, high-quality results with care, precision, and complete professionalism every time.',
  },
  {
    icon: '🌱',
    title: 'Eco-Conscious Cleaning',
    desc: 'We use safe, eco-friendly cleaning products that protect your health, your family, pets, and the environment without compromising cleanliness.',
  },
  {
    icon: '🏠',
    title: 'Personalized Solutions',
    desc: 'From one-time deep cleaning to regular maintenance, our services are customized to match your space, lifestyle, and specific cleaning needs.',
  },
  {
    icon: '⏳',
    title: 'Flexible Scheduling',
    desc: 'Book cleaning services at a time that suits you best — we work around your schedule to make cleaning simple and stress-free.',
  },
  {
    icon: '🤝',
    title: 'Trusted by Clients',
    desc: 'Clients trust us for consistent quality, reliable service, and long-term relationships built through honest work and professional cleaning standards.',
  },
];

function Why() {
  return (
    <section className="bg-green-50 w-full py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-14 text-green-800 tracking-tight">
          Why Choose <span className="text-green-600">Swift Shift & Shine?</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="group bg-white rounded-xl shadow-md p-7 flex flex-col items-center text-center border border-green-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <span
                className="text-4xl mb-4 transition-colors duration-300 group-hover:text-green-600"
                aria-hidden="true" 
              >
                {feature.icon}
              </span>
              <h3 className="font-semibold text-xl mb-2 text-green-800 group-hover:text-green-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <div className="w-10 h-1 bg-green-100 rounded-full mb-2 group-hover:bg-green-300 transition-all duration-300"></div>
              <p className="text-gray-700 text-base leading-relaxed transition-colors duration-200 group-hover:text-green-900">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Why