import React from "react";
import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-100">

      {/* glow bg */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center rounded-3xl
          bg-white/50 backdrop-blur-xl
          border border-white/60
          p-10 md:p-16
          shadow-[0_10px_40px_rgba(244,114,182,0.15)]"
        >
          <p className="text-pink-500 uppercase tracking-[4px] text-sm mb-4">
            Book Your Stay
          </p>

          <h2
            className="text-4xl md:text-5xl text-pink-600 mb-6"
            style={{ fontFamily: "cursive" }}
          >
            Looking for a Peaceful Stay?
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-2xl mx-auto">
            Experience comfort, safety and a warm home-like atmosphere
            at Happy Homes in Sholinganallur.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-8">

            <a
              href="tel:9384526013"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold
              shadow-[0_0_25px_rgba(236,72,153,0.35)]
              hover:scale-105 transition duration-300 flex items-center gap-2"
            >
              <PhoneCall size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/919384526013"
              className="px-8 py-3 rounded-full border border-pink-300
              bg-white/70 text-pink-600 backdrop-blur-md
              hover:bg-white transition duration-300"
            >
              WhatsApp Us
            </a>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;