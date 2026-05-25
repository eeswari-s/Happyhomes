import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">

      {/* animated glow */}
      <motion.div
        animate={{
          y: [0, -25, 0],
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
          y: [0, 20, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute bottom-0 right-0 w-80 h-80 bg-[#C9577C]/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-[#C9577C]/20 rounded-3xl blur-2xl"></div>

          <motion.img
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            src="/about-room.png"
            alt="Happy Homes"
            className="relative w-full h-[500px] object-cover rounded-3xl
            border border-white/60
            shadow-[0_10px_45px_rgba(201,87,124,0.20)]"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 45 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <p className="text-[#C9577C] uppercase tracking-[4px] text-sm mb-4">
            About Us
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#C9577C] mb-6"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Your Comfort, Our Priority
          </h2>

          <p className="text-gray-600 text-lg leading-8">
            Happy Homes offers a peaceful and premium stay experience in
            Sholinganallur with comfort, privacy and convenience.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-5">
            A warm and welcoming space thoughtfully designed for students
            and working professionals to feel relaxed, safe and truly at home.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default About;