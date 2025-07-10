
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./flip.css";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    name: "Rocket League",
    baseImg: "/images/rl.jpg",
    hoverText: "Rocket League",
  },
  {
    name: "Valorant",
    baseImg: "/images/valorant.jpg",
    hoverText: "Valorant",
  },
  {
    name: "Call of Duty",
    baseImg: "/images/COD.jpg",
    hoverText: "Call of Duty",
  },
  {
    name: "Fortnite",
    baseImg: "/images/fortnite.jpg",
    hoverText: "Fortnite",
  },
];

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
        <h2 className="text-black text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide DrukWide">
          GAMES WE PLAY
        </h2>
      </div>

     <div
  ref={card}
  className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl w-full px-4 place-items-center"
>

        {cards.map((card, idx) => (
          <HoverCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}

function HoverCard({ baseImg, hoverText, name }) {
  return (
    <div className="flip-card w-[320px] h-[200px] sm:w-[360px] sm:h-[220px] md:w-[400px] md:h-[240px] lg:w-[440px] lg:h-[260px]">
      <div className="flip-inner group w-full h-full">
        <div className="flip-front w-full h-full">
          <img
            src={baseImg}
            alt={name}
            className="w-full h-full object-cover shadow-xl" // 🔴 no rounded class
          />
        </div>
        <div className="flip-back w-full h-full flex items-center justify-center bg-black text-white text-xl sm:text-2xl font-bold DrukWide">
          <span>{hoverText}</span>
        </div>
      </div>
    </div>
  );
}
