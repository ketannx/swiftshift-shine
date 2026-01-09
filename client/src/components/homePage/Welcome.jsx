import React from 'react'

function Welcome() {
  return (
    <section className="bg-white py-16">
      {/* Heading centered and at the very top */}
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-12 tracking-tight text-center">
          Welcome to Swift Shift & Shine
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-3">
            We help transform your space into a clean, calm, and comfortable environment. Our professional cleaning services are designed to bring freshness, order, and peace back into your home or workplace.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Cleaning isn’t just about appearance — it’s about creating a healthier, more welcoming space where you can relax and focus on what matters most. Whether you need a detailed deep clean, routine maintenance, or a quick refresh, our trained team delivers reliable results with care and precision.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://www.getsetclean.in/images/b1axej4ajyjt/2bd8558255381507822897e44064b476/e8f2ca01ecb81e6212fb124d3997dc9d/aHR0cHNfX193d3cuY2xlYW5pcGVkaWEuY29tX2NvbnRlbnRfZGFtX3VuaWxldmVyX2NsZWFuaXBlZGlhX2luZGlhX2dlbmVyYWxfaW1hZ2Vfc2h1dHRlcnN0b2NrXzUxMDY3NTEzOS0yMDgzOTg3LWpwZy5qcGc/600w/how-to-make-house-cleaning-schedule-and-checklist-%7C-get-set-clean.jpg"
              alt="Immaculately Cleaned Room"
              className="rounded-lg shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome