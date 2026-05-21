import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const teamData = [
  {
    name: "Force",
    img: "/images/staff/force.jpg",
    twitter: "https://x.com/ForceMGM",
  },
  {
    name: "Jaszd",
    img: "/images/staff/jaszd.jpg",
    twitter: "",
  },
  {
    name: "Lukacy",
    img: "/images/staff/lukacy.jpg",
    twitter: "https://x.com/lukacyyy",
  },
  {
    name: "Zaulty",
    img: "/images/staff/zaulty.jpg",
    twitter: "https://x.com/ablezaulty",
  },
];


const Staff = () => {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { filter: "blur(10px)" },
      { filter: "blur(0px)", duration: 0.9, ease: "power2.out" }
    );

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

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
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
          LEADERSHIP
        </h1>
      </div>

      <div className="w-full px-4 sm:px-10 py-10 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-10 gap-x-6 justify-items-center">
          {teamData.map((player, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="relative w-[90%] max-w-[280px] aspect-[3/4] [perspective:1000px] group"
            >
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute w-full h-full rounded-xl shadow-lg [backface-visibility:hidden]">
                  <img
                    src={player.img}
                    alt={player.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                {/* Back */}
                <div className="absolute w-full h-full bg-[#D4AF37] rounded-xl text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <span className="font-bold text-2xl text-white">{player.name}</span>
                  {player.twitter && (
                    <a
                      href={player.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2"
                    >
                      <FaTwitter className="text-white text-2xl hover:scale-110 transition-transform" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Staff;
