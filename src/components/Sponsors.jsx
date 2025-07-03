import React from "react";

const sponsors = [
  "./images/sponsors/s1.jpg",
  "./images/sponsors/s2.jpg",
  "./images/sponsors/s3.jpg",
  "./images/sponsors/s4.jpg",

];

export default function Partners() {
  return (
    <section className="bg-[#f7f6fa] py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold DrukWide">OUR PARTNERS</h2>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 px-4 max-w-6xl mx-auto">
        {sponsors.map((src, index) => (
          <div
            key={index}
            className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-white flex items-center justify-center shadow-md"
          >
            <img
              src={src}
              alt={`Sponsor ${index + 1}`}
              className="max-w-[60%] max-h-[60%] object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
