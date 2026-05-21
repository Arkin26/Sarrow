
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./flip.css";

gsap.registerPlugin(ScrollTrigger);

export default function HoverCards() {
  const text1 = useRef(null);
  const card = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      text1.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text1.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );

    gsap.fromTo(
      card.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div
      id="team"
      className="w-full flex flex-col items-center justify-center bg-black bg-cover bg-center px-4 py-16"
      style={{
        backgroundImage: `url('/images/bg-banner-1_cleanup.jpg')`,
      }}
    >
      <div ref={text1} className="text-center mb-10">
        <h2 className="text-[#D4AF37] text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide DrukWide">
          GAMES WE PLAY
        </h2>
      </div>

      <div
        ref={card}
        className="mt-10 flex justify-center max-w-6xl w-full px-4"
      >
        <div className="flip-card w-[480px] h-[300px] sm:w-[540px] sm:h-[330px] md:w-[600px] md:h-[360px] lg:w-[660px] lg:h-[390px]">
          <div className="flip-inner group w-full h-full">
            <div className="flip-front w-full h-full">
              <img
                src="/images/wallpaper-new.jpg"
                alt="Fortnite"
                className="w-full h-full object-cover shadow-xl"
              />
            </div>
            <div className="flip-back w-full h-full flex items-center justify-center bg-black">
              <span className="text-[#D4AF37] text-xl sm:text-2xl font-bold DrukWide">
                Fortnite
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
