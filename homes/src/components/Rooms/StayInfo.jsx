import React from "react";
import { motion } from "framer-motion";

function StayInfo() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">

      {/* glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* left content */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-pink-500 uppercase tracking-[4px] text-sm mb-4">
            Happy Living
          </p>

          <h2
            className="text-4xl md:text-5xl text-pink-600 mb-6"
            style={{ fontFamily: "cursive" }}
          >
            Comfortable Stay For Everyone
          </h2>

          <div className="space-y-4 text-gray-600 text-lg leading-8">
            <p>• 1 Sharing to 4 Sharing Rooms Available</p>
            <p>• AC & Non-AC Options</p>
            <p>• Homely Food Available</p>
            <p>• Safe & Peaceful Environment</p>
            <p>• Prime Location at Sholinganallur</p>
          </div>
        </motion.div>

        {/* right image */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-pink-200/40 rounded-3xl blur-2xl"></div>

          <img
            src="/stay-info.png"
            alt="Happy Homes Stay"
            className="relative w-full h-[500px] object-cover rounded-3xl
            border border-white/60
            shadow-[0_10px_45px_rgba(244,114,182,0.18)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default StayInfo;