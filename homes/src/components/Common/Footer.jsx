import React from "react";
import { PhoneCall, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer
      className="relative mt-20 overflow-hidden
      bg-gradient-to-r from-[#C95379] to-[#D66588]"
    >
      {/* glow blobs */}
      <div className="absolute top-0 left-10 w-44 h-44 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-52 h-52 bg-white/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Left */}
          <div
            className="bg-white/10 backdrop-blur-xl
            border border-white/20 rounded-3xl p-6"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/logo.png"
                alt="Happy Homes"
                className="w-16 h-16 object-contain
                drop-shadow-[0_0_18px_rgba(255,255,255,0.5)]"
              />

          <div>
  <h2
    className="text-white text-2xl md:text-3xl uppercase"
    style={{
      fontFamily: "'Bowlby One', cursive",
      letterSpacing: "2px",
      textShadow: "0 0 10px rgba(255,255,255,0.25)",
      lineHeight: "1",
    }}
  >
    HAPPY HOMES
  </h2>

  <p
    className="text-white/95 text-lg -mt-1"
    style={{
      fontFamily: "'Great Vibes', cursive",
      fontWeight: "400",
      lineHeight: "1.2",
    }}
  >
    Stay Luxury
  </p>
</div>
            </div>

            <p className="text-white/90 leading-7 text-sm">
              Comfortable, peaceful and secure living with premium amenities.
              Feel at home every day at Happy Homes.
            </p>
          </div>

          {/* Contact */}
          <div
            className="bg-white/10 backdrop-blur-xl
            border border-white/20 rounded-3xl p-6"
          >
            <h3 className="text-white text-xl font-semibold mb-5">
              Contact Details
            </h3>

            <div className="space-y-5 text-white/90">
              <a
                href="tel:9384526013"
                className="flex items-start gap-3 hover:translate-x-1 transition"
              >
                <PhoneCall size={18} />
                <span>093845 26013</span>
              </a>

              <a
                href="https://wa.me/919384526013"
                className="flex items-start gap-3 hover:translate-x-1 transition"
              >
                <FaWhatsapp size={18} />
                <span>WhatsApp Available</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 min-w-fit" />
                <p className="leading-7">
                  2nd Street, Ponni Amman Kovil,
                  No 336, Village High Rd,
                  TNHB, Sholinganallur,
                  Chennai - 600119
                </p>
              </div>
            </div>
          </div>

          {/* Right */}
          <div
            className="bg-white/10 backdrop-blur-xl
            border border-white/20 rounded-3xl p-6"
          >
            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="space-y-4 text-white/90">
              <p className="hover:translate-x-1 transition cursor-pointer">Home</p>
              <p className="hover:translate-x-1 transition cursor-pointer">Rooms</p>
              <p className="hover:translate-x-1 transition cursor-pointer">Contact</p>
            </div>
          </div>
        </motion.div>

        {/* bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-white/80 text-sm">
          © 2026 HAPPY HOMES. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;