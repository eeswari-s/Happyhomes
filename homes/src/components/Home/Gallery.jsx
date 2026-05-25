import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Gallery() {
  const images = [
    "/room1.png",
    "/room2.png",
    "/room3.png",
    "/room4.png",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">

      {/* glow blobs */}
      <motion.div
        animate={{ y: [0, -25, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 25, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* heading */}
        <div className="text-center mb-14">
         <p className="text-pink-500 uppercase tracking-[4px] text-sm mb-4">
  Gallery
</p>

<h2
  className="text-4xl md:text-5xl text-pink-600"
  style={{ fontFamily: "cursive" }}
>
  Explore Happy Homes
</h2>
        </div>

        {/* slider */}
        <div
          className="relative w-full h-[280px] md:h-[500px]
          rounded-3xl overflow-hidden
          border border-white/60
          bg-white/40 backdrop-blur-xl
          shadow-[0_10px_35px_rgba(244,114,182,0.15)]"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt="Happy Homes Room"
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.8 }}
              className="absolute w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* dots */}
        <div className="flex justify-center gap-3 mt-6">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-pink-500 scale-125"
                  : "bg-pink-200"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;