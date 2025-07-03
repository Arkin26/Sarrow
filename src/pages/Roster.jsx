import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaTwitter } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const teamData = [
  {
    name: "Chicken-Pro",
    img: "/images/roster/Chicken-pro.jpg",
    twitter: "https://x.com/ChickenItzaa",
  },
  {
    name: "Slick-Pro",
    img: "/images/roster/slick-pro.jpg",
    twitter: "https://x.com/SlickTV_",
  },
  {
    name: "Fletch-Pro",
    img: "/images/roster/fletch-pro.jpg",
    twitter: "https://x.com/flechfn?s=21&t=aCb8KZp64yDpoRymZ5sk8w",
  },
  {
    name: "Khaz-Pro",
    img: "/images/roster/Khaz-pro.jpg",
    twitter: "https://x.com/khaziana1x",
  },
];

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
          className="text-black DrukWide text-7xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-8xl"
        >
          ROSTER
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
                <div className="absolute w-full h-full bg-[#fb1fb1] rounded-xl text-white flex flex-col items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <span className="font-bold text-2xl">{player.name}</span>
                  <a
                    href={player.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2"
                  >
                    <FaTwitter className="text-white text-2xl hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Roster;
