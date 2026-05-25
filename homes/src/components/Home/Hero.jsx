import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-100">

      {/* background glow */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-0 left-0 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl"
      />

      <div className="grid lg:grid-cols-2 min-h-screen items-center relative z-10">

        {/* LEFT CONTENT */}
        <div className="px-6 md:px-12 lg:px-20 py-20">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-pink-500 uppercase tracking-[4px] mb-4 text-sm"
          >
            Welcome To
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-pink-600 text-5xl md:text-7xl leading-tight"
            style={{
              fontFamily: "cursive",
              textShadow: "0 0 14px rgba(255,182,193,0.35)",
            }}
          >
            Happy Homes
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-pink-700 text-2xl md:text-3xl mt-4"
          >
            Feel at Home, Stay in Comfort
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-600 mt-6 text-lg leading-8 max-w-xl"
          >
            Peaceful premium stay in Sholinganallur with comfort,
            safety and all modern amenities for happy living.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 mt-8 flex-wrap"
          >
            <a
              href="tel:9384526013"
              className="bg-pink-500 text-white px-8 py-3 rounded-full
              shadow-[0_0_25px_rgba(236,72,153,0.35)]
              hover:scale-105 transition duration-300
              flex items-center gap-2"
            >
              <PhoneCall size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/919384526013"
              className="px-8 py-3 rounded-full
              bg-white/60 backdrop-blur-md
              border border-pink-200
              text-pink-600 hover:bg-white transition"
            >
              WhatsApp
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 1,
            y: {
              duration: 4,
              repeat: Infinity,
            },
          }}
          className="relative h-[60vh] lg:h-screen w-full"
        >
          <img
            src="/hero-room.png"
            alt="Happy Homes"
            className="w-full h-full object-cover"
          />

          {/* left blend overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-rose-50"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;