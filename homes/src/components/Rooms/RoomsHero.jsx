import React from "react";
import { motion } from "framer-motion";
import { BedDouble } from "lucide-react";

function RoomsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-100">

      {/* glow bg */}
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-[#C9577C]/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-10 w-80 h-80 bg-[#C9577C]/20 rounded-full blur-3xl"
      />

      <div className="grid lg:grid-cols-2 min-h-screen items-center">

        {/* Left */}
        <div className="px-6 md:px-12 lg:px-20 py-20">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#C9577C] tracking-[4px] uppercase mb-4 text-sm"
          >
            Our Rooms
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#C9577C] text-5xl md:text-7xl"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 0 12px rgba(201,87,124,0.20)",
            }}
          >
            Stay In Comfort
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-600 mt-6 text-lg leading-8 max-w-xl"
          >
            Beautifully designed rooms with a peaceful atmosphere,
            comfort and everything you need for everyday living.
          </motion.p>

          <div className="mt-8">
            <a
              href="tel:9384526013"
              className="inline-flex items-center gap-2
              bg-[#C9577C] text-white
              px-7 py-3 rounded-full
              shadow-[0_0_25px_rgba(201,87,124,0.30)]
              hover:scale-105 transition"
            >
              <BedDouble size={18} />
              Check Availability
            </a>
          </div>

        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[60vh] lg:h-screen w-full"
        >
          <img
            src="/rooms-hero.png"
            alt="Happy Homes Rooms"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-rose-50/40"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default RoomsHero;