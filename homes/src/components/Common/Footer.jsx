import React from "react";
import { PhoneCall, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="relative mt-20 overflow-hidden bg-gradient-to-br from-pink-500 via-pink-400 to-fuchsia-500">

      {/* Glow blobs */}
      <div className="absolute top-0 left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-52 h-52 bg-pink-200/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Left */}
          <div
            className="bg-white/10 backdrop-blur-xl border border-white/20
            rounded-3xl p-6 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src="/logo.png"
                alt="Happy Homes"
                className="w-16 h-16 object-contain
                drop-shadow-[0_0_20px_rgba(255,255,255,0.9)]
                animate-pulse"
              />

              <div>
                <h2
                  className="text-white text-2xl font-bold"
                  style={{
                    textShadow:
                      "0 0 10px rgba(255,255,255,0.8), 0 0 25px rgba(255,255,255,0.5)",
                  }}
                >
                  Happy Homes
                </h2>

                <p className="text-pink-100 text-sm tracking-wider">
                  Stay Luxury
                </p>
              </div>
            </div>

            <p className="text-pink-50 leading-7 text-sm">
              Comfortable, peaceful and secure living with premium amenities.
              Feel at home every day at Happy Homes.
            </p>
          </div>

          {/* Contact */}
          <div
            className="bg-white/10 backdrop-blur-xl border border-white/20
            rounded-3xl p-6 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <h3 className="text-white text-xl font-semibold mb-5">
              Contact Details
            </h3>

            <div className="space-y-5 text-pink-50">

              <a
                href="tel:9384526013"
                className="flex items-start gap-3 hover:translate-x-1 transition duration-300"
              >
                <PhoneCall size={18} />
                <span>093845 26013</span>
              </a>

              <a
                href="https://wa.me/919384526013"
                className="flex items-start gap-3 hover:translate-x-1 transition duration-300"
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
                  Chennai, Tamil Nadu 600119
                </p>
              </div>

            </div>
          </div>

          {/* Right */}
          <div
            className="bg-white/10 backdrop-blur-xl border border-white/20
            rounded-3xl p-6 shadow-[0_0_30px_rgba(255,255,255,0.15)]"
          >
            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="space-y-4 text-pink-50">
              <p className="hover:translate-x-1 transition">Home</p>
              <p className="hover:translate-x-1 transition">Rooms</p>
              <p className="hover:translate-x-1 transition">Contact</p>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-10 pt-6 text-center text-pink-100 text-sm">
          © 2026 Happy Homes. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;