import React from "react";
import { motion } from "framer-motion";

function ContactHero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-100">

      {/* animated glow */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-10 left-10 w-72 h-72 bg-[#C9577C]/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-[#C9577C]/20 rounded-full blur-3xl"
      />

      <div className="grid lg:grid-cols-2 min-h-screen items-center relative z-10">

        {/* Left content */}
        <div className="px-6 md:px-12 lg:px-20 py-20">

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[#C9577C] uppercase tracking-[4px] mb-4 text-sm"
          >
            Contact Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#C9577C] text-5xl md:text-7xl leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              textShadow: "0 0 14px rgba(201,87,124,0.18)",
            }}
          >
            We'd Love To
            <br />
            Hear From You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 mt-6 text-lg leading-8 max-w-xl"
          >
            Looking for a peaceful stay in Sholinganallur?
            Contact Happy Homes anytime for room availability,
            visit details and stay information.
          </motion.p>

        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[60vh] lg:h-screen w-full"
        >
          <img
            src="/contact-hero.png"
            alt="Contact Happy Homes"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-rose-50/30"></div>
        </motion.div>

      </div>
    </section>
  );
}

export default ContactHero;