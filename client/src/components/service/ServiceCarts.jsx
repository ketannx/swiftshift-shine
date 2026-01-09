import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaCheckCircle, FaHome, FaBuilding, FaBroom } from "react-icons/fa";

const services = [
  {
    title: "House Cleaning",
    desc: "Complete cleaning for comfortable living.",
    icon: <FaHome />,
    includes: ["All rooms", "Kitchen & bathroom", "Floors & dusting"],
  },
  {
    title: "Apartment / Condo Cleaning",
    desc: "Perfect for apartments & condos.",
    icon: <FaBuilding />,
    includes: ["Living areas", "Bedrooms", "Washrooms"],
  },
  {
    title: "Office Cleaning",
    desc: "Clean & organized workspaces.",
    icon: <FaBuilding />,
    includes: ["Desks", "Common areas", "Washrooms"],
  },
  {
    title: "Deep Cleaning",
    desc: "Focused deep care service.",
    icon: <FaBroom />,
    includes: ["Deep kitchen care", "Bathroom detailing", "Hard stains"],
    highlight: true,
  },
  {
    title: "Steam Cleaning",
    desc: "Sanitized steam-based cleaning.",
    icon: <FaBroom />,
    includes: ["Steam floors", "Sanitization", "Odor removal"],
  },
  {
    title: "Power Washing",
    desc: "Outdoor & surface power wash.",
    icon: <FaBroom />,
    includes: ["Driveways", "Walls", "Outdoor areas"],
  },
];

function ServiceCarts() {
  const cardsRef = useRef([]);

  useEffect(() => {
    // Use passive pointer events to reduce lag, and apply shorter duration for snappy feel
    cardsRef.current.forEach((card) => {
      if (!card) return;

      gsap.set(card, { y: 0, scale: 1 });
      let enterTween = null;
      let leaveTween = null;

      const onMouseEnter = () => {
        // Kill ongoing "leave" animation if present
        if (leaveTween) leaveTween.kill();
        enterTween = gsap.to(card, {
          y: -8,
          scale: 1.025,
          duration: 0.06,
          ease: "power1.out",
          overwrite: "auto",
        });
      };

      const onMouseLeave = () => {
        if (enterTween) enterTween.kill();
        leaveTween = gsap.to(card, {
          y: 0,
          scale: 1,
          duration: 0.09,
          ease: "power1.inOut",
          overwrite: "auto",
        });
      };

      card.addEventListener("mouseenter", onMouseEnter, { passive: true });
      card.addEventListener("mouseleave", onMouseLeave, { passive: true });

      // Cleanup
      card._cleanup = () => {
        card.removeEventListener("mouseenter", onMouseEnter);
        card.removeEventListener("mouseleave", onMouseLeave);
      };
    });

    // Remove listeners on cleanup to prevent leaks
    return () => {
      cardsRef.current.forEach((card) => {
        if (card && card._cleanup) card._cleanup();
      });
    };
  }, []);

  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            // Remove green border, make all border-gray-200, increase size
            className={`rounded-3xl border-2 border-gray-200 p-10 bg-white shadow-md transition-all`}
            style={{
              minHeight: "370px" // to make cards noticeably bigger
            }}
          >
            {/* Icon - made bigger */}
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-green-100 text-green-600 text-3xl">
              {service.icon}
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {service.title}
            </h3>
            <p className="text-base text-gray-600 mb-6">
              {service.desc}
            </p>

            <div className="space-y-4">
              {service.includes.map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-base text-gray-700">
                  <FaCheckCircle className="text-green-500 text-lg" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServiceCarts;
