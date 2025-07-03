import React, { Suspense, lazy, useEffect, useRef } from "react";
import gsap from "gsap";

const Roster = lazy(() => import("../components/HoverCards"));
const Merch = lazy(() => import("../components/Merch"));

export default function HomePage() {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { filter: "blur(20px)" },
      {
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <>
      {/* Banner */}
      <div className="p-0 w-full h-auto overflow-hidden">
        <img
          ref={bannerRef}
          src="./images/main-banner-optional-2.jpg"
          alt="Responsive Banner"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Lazy-loaded sections */}
      <Suspense fallback={<div className="text-white text-center p-10">Loading Roster...</div>}>
        <Roster />
      </Suspense>

      <Suspense fallback={<div className="text-white text-center p-10">Loading Merch...</div>}>
        <Merch />
      </Suspense>
      <div className="w-full h-[1px] bg-[#fb1fb1]" />

    </>
  );
}
