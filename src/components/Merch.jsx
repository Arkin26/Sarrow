import React from "react";

const merchItems = [
  {
    name: "SARROW PREMIUM ESPORTS JERSEY V1",
    price: "$60.00",
    image: "/images/jersey-1.png",
    hoverImage: "/images/jersey-1-back.png",
    url: "https://evo9x.gg/collections/sarrow/products/sarrow-premium-esports-jersey-v1",
  },
  {
    name: "SARROW ESPORTS PREMIUM HOODIE",
    price: "$55.00",
    image: "/images/hoodie-1.png",
    hoverImage: "/images/hoodie-1-back.png",
    url: "https://evo9x.gg/collections/sarrow/products/sarrow-esports-premium-hoodie",
  },
 
  {
    name: "SARROW ESPORTS GAMING MOUSEPAD",
    price: "$50.00",
    image: "/images/mp-1.png",
     hoverImage: "/images/mp-1.png",
    url: "https://evo9x.gg/collections/sarrow/products/sarrow-esports-gaming-mousepad",
  },
   {
    name: "SARROW PREMIUM ESPORTS JERSEY 2K25",
    price: "$30.00",
    image: "/images/jersey-2.png",
    hoverImage: "/images/jersey-2-back.png",
    url: "https://evo9x.gg/collections/sarrow/products/sarrow-premium-esports-jersey-2k25",
  },
];

export default function MerchShowcase() {
  return (
    <div className="bg-black text-white py-12 px-4 md:px-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-6xl font-black DrukWide text-[#D4AF37]">
          MERCH
        </h1>
        <a
          href="https://arrivalseven.printify.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-sm font-bold tracking-widest no-underline flex items-center gap-2"
        >
          SHOP NOW <span className="text-2xl">→</span>
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {merchItems.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Image Swap Box */}
            <div className="relative w-full aspect-[3/4]">
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full p-[10px] object-cover transition-opacity duration-300 group-hover:opacity-0"
              />
              {item.hoverImage && (
                <img
                  src={item.hoverImage}
                  alt={`${item.name} hover`}
                  className="p-[10px] absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              )}
            </div>

            {/* Details */}
            <div className="text-center p-4">
              <p className="uppercase font-bold text-sm tracking-wider text-black">{item.name}</p>
              <p className="text-lg font-semibold text-black mt-1">{item.price}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="w-full h-[1px] bg-[#D4AF37] mt-10" />
    </div>
  );
}