import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";
import "./flip.css";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    name: "Counter Strike 2",
    baseImg: "/images/COD-pfp.jpg",
    hoverText: "Counter Strike 2",
    
  },
  {
    name: "Marvel Rivals",
    baseImg: "/images/R6-pfp.jpg",
    hoverText: "Marvel Rivals",
 
  },
  {
    name: "Rocket League",
    baseImg: "/images/sarrow-pfp.jpg",
    hoverText: "Rocket League",

  },
];

export default function HoverCards() {
  const text1 = useRef(null);
  const card = useRef(null);
useEffect(() => {
  // Text Animation (Triggers when text1 hits 90% from top of viewport)
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

  // Card Animation (Triggers when card container hits 90% from top of viewport)
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
      className="w-full flex flex-col items-center justify-center bg-black bg-cover bg-center px-4 py-16 sm:py-16 md:py-22"
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
        className="mt-[20px] flex flex-wrap justify-center gap-[80px] max-w-7xl w-full"
      >
        {cards.map((card, idx) => (
          <HoverCard key={idx} {...card} />
        ))}
      </div>
    </div>
  );
}

function HoverCard({ baseImg, hoverText, name, url }) {
  return (
    <div
     
      className="flip-card w-[250px] h-[250px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[280px] lg:h-[280px]"
    >
      <div className="flip-inner group">
        <div className="flip-front">
          <img
            src={baseImg}
            alt={name}
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </div>
        <div className="flip-back rounded-full DrukWide">
          <span>{hoverText}</span>
        </div>
      </div>
    </div>
  );
}
