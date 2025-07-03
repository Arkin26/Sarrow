import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SlideShow from "../components/SlideShow";
import Sponsors from "../components/Sponsors";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const titleRef = useRef(null);
  const storyRef = useRef(null);
  const missionRef = useRef(null);
  const partnersRef = useRef(null);

  useEffect(() => {
    // Blur + fade-in animation for "SARROW ESPORTS"
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, filter: "blur(10px)", y: 30 },
      {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.2,
      }
    );

    // Scroll animations
    const sections = [storyRef.current, missionRef.current, partnersRef.current];
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>

      {/* Hero Banner */}
      <div className="w-full h-[300px] sm:h-[400px] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: "url('/images/banner-1.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1
            ref={titleRef}
            className="text-3xl sm:text-4xl md:text-5xl text-white DrukWide text-center px-4"
          >
            <span style={{ color: "#fb1fb1" }}>SARROW</span> ESPORTS
          </h1>
        </div>
      </div>

      {/* Story & Mission */}
      <div className="py-16 bg-[#f7f6fa]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Our Story */}
            <div ref={storyRef}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-6">
                Our Story
              </h2>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Founded in 2023 and re-launched with a sharper vision in early
                2025, Team Sarrow has rapidly made its mark on the esports
                world. What began as a passion project quickly evolved into one
                of the fastest-rising names in competitive Fortnite — fueled by
                nonstop grinding, day-in and day-out consistency, and a
                team-first mindset.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                In just a short time, we've grown into a powerhouse, reaching
                millions across socials, generating millions of views every
                month, and cultivating a thriving community — with our Discord
                server surpassing 11,000 members. On the competitive side, we’ve
                racked up 50+ tournament wins in 2025 alone, earning us a spot
                as a Top 3 NA West Fortnite organization.
              </p>
            </div>

            {/* Our Mission */}
            <div ref={missionRef}>
              <div className="bg-black p-6 sm:p-8 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                  To push the boundaries of competitive gaming while maintaining
                  the highest standards of sportsmanship, teamwork, and
                  community engagement. We strive to inspire the next generation
                  of esports athletes and contribute positively to the gaming
                  ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Stats Ticker */}
      <div className="overflow-hidden w-full bg-[#f7f6fa] py-10">
        <div
          className="flex w-max animate-scroll space-x-12 sm:space-x-16"
          style={{ animation: "scroll 30s linear infinite" }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-12 sm:space-x-16">
              {[
                { value: "50x", label: "Grand Finals" },
                { value: "46x", label: "Tournament Wins" },
                { value: "10M+", label: "Total Views" },
                { value: "11K", label: "Discord Members" },
                { value: "40K", label: "TikTok Followers" },
                { value: "10K", label: "YouTube Subs" },
                { value: "16K", label: "Twitter Followers" },
                { value: "COD", label: "Tournament Champs" },
              ].map((stat, index) => (
                <div
                  key={`${i}-${index}`}
                  className="text-center flex-shrink-0 w-[120px] sm:w-[160px] md:w-[200px]"
                >
                  <div
                    className="text-xl sm:text-2xl md:text-3xl font-bold"
                    style={{ color: "#fb1fb1" }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-xs sm:text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
<SlideShow />
      {/* Slideshow Section */}
      <div ref={partnersRef}>
        
        <Sponsors />
      </div>

      <div className="w-full h-[1px] bg-[#fb1fb1]" />
    </div>
  );
};

export default AboutUs;
