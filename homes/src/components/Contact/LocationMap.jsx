import React from "react";
import { motion } from "framer-motion";

function LocationMap() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">

      {/* glow */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-pink-500 uppercase tracking-[4px] text-sm mb-4">
            Find Us
          </p>

          <h2
            className="text-4xl md:text-5xl text-pink-600"
            style={{ fontFamily: "cursive" }}
          >
            Visit Happy Homes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden border border-white/60
          bg-white/40 backdrop-blur-xl
          shadow-[0_10px_40px_rgba(244,114,182,0.15)]"
        >
          <iframe
            src="https://www.google.com/maps?q=Happy+Homes+Sholinganallur+Chennai&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="Happy Homes Location"
            className="w-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default LocationMap;