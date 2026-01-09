import { FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";
import { useRef } from "react";
import gsap from "gsap";

function Details() {
  const cardRefs = useRef([]);

  const handleEnter = (i) => {
    gsap.to(cardRefs.current[i], {
      y: -8,
      scale: 1.03,
      boxShadow: "0 20px 40px rgba(22,163,74,0.15)",
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleLeave = (i) => {
    gsap.to(cardRefs.current[i], {
      y: 0,
      scale: 1,
      boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
      duration: 0.35,
      ease: "power3.out",
    });
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-green-50 to-white">
      {/* Soft green background blur */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-200/30 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-14 text-lg">
          We’d love to hear from you! Reach out with any questions about our
          cleaning services, partnership opportunities, or customer support.
          <span className="block mt-3 text-sm text-gray-500">
            Please note: we kindly ask not to use these details for unsolicited
            marketing.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Address */}
          <div
            ref={(el) => (cardRefs.current[0] = el)}
            onMouseEnter={() => handleEnter(0)}
            onMouseLeave={() => handleLeave(0)}
            className="bg-white rounded-2xl p-8 text-center shadow-[0_10px_25px_rgba(0,0,0,0.05)] cursor-pointer"
          >
            <FaLocationDot className="mx-auto text-green-600 text-4xl mb-5" />
            <h3 className="font-semibold text-xl mb-3 text-gray-900">
              Address
            </h3>
            <p className="text-gray-600 leading-relaxed">
              6295 Knight Street <br />
              V5P 2V9, Vancouver <br />
              BC, Canada
            </p>
          </div>

          {/* Phone */}
          <div
            ref={(el) => (cardRefs.current[1] = el)}
            onMouseEnter={() => handleEnter(1)}
            onMouseLeave={() => handleLeave(1)}
            className="bg-white rounded-2xl p-8 text-center shadow-[0_10px_25px_rgba(0,0,0,0.05)] cursor-pointer"
          >
            <FaPhone className="mx-auto text-green-600 text-4xl mb-5" />
            <h3 className="font-semibold text-xl mb-3 text-gray-900">
              Phone Number
            </h3>
            <p className="text-gray-600">+1 604 750 6960</p>
          </div>

          {/* Email */}
          <div
            ref={(el) => (cardRefs.current[2] = el)}
            onMouseEnter={() => handleEnter(2)}
            onMouseLeave={() => handleLeave(2)}
            className="bg-white rounded-2xl p-8 text-center shadow-[0_10px_25px_rgba(0,0,0,0.05)] cursor-pointer"
          >
            <FaEnvelope className="mx-auto text-green-600 text-4xl mb-5" />
            <h3 className="font-semibold text-xl mb-3 text-gray-900">
              Email
            </h3>
            <p className="text-gray-600">Swiftshiftshine.ca.van@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;
