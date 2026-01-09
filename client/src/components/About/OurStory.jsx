import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function OurStory() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      gsap.from(contentRef.current.children, {
        opacity: 0,
        y: 25,
        duration: 0.7,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6">

        {/* Heading */}
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-semibold text-green-700 text-center mb-10"
        >
          Our Story
        </h1>

        {/* Content Card */}
        <div
          ref={contentRef}
          className="bg-green-50/50 border border-green-100 rounded-2xl p-8 md:p-12 shadow-sm"
        >
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Swift Shift & Shine was created with a simple mission: to deliver reliable, high-quality cleaning for homes and businesses across Canada.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            From a small local service to a trusted cleaning brand, we’ve grown through our commitment to quality, professionalism, and customer care. Using modern and eco-friendly cleaning methods, we ensure every space is fresh, safe, and welcoming.
          </p>
        </div>

      </div>
    </section>
  );
}

export default OurStory;
