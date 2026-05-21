import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const rosterSlots = 4;

const Roster = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Banner blur animation
    gsap.fromTo(
      bannerRef.current,
      { filter: "blur(10px)" },
      { filter: "blur(0px)", duration: 0.9, ease: "power2.out" }
    );

    // ROSTER title animation
    gsap.fromTo(
      textRef.current,
      { opacity: 0, filter: "blur(10px)", y: 30 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1.1,
        ease: "power2.out",
        delay: 0.2,
      }
    );

    // Cards scroll animation
   gsap.fromTo(
  cardsRef.current,
  { opacity: 0, y: 60 },
  {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power2.out",
    stagger: 0.2,
    scrollTrigger: {
      trigger: cardsRef.current[0],
      start: "top 95%",
      toggleActions: "play none none none",
    },
  }
);

  }, []);

  return (
    <>
      <div
        ref={bannerRef}
        className="relative w-full h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: "url('/images/bg-banner-1_cleanup.jpg')" }}
      >
        <h1
          ref={textRef}
          className="text-[#D4AF37] DrukWide text-7xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl"
        >
          ROSTER
        </h1>
      </div>

      <div className="w-full px-4 sm:px-10 py-10 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6 justify-items-center">
          {Array.from({ length: rosterSlots }).map((_, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative w-[90%] max-w-[280px] aspect-[3/4]"
            >
              <div className="w-full h-full rounded-xl bg-white flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.06),0_0_24px_4px_rgba(0,0,0,0.12)]">
                <span className="text-black font-bold text-4xl DrukWide">TBD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Roster;
