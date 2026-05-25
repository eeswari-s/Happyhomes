import React from "react";
import { motion } from "framer-motion";
import { PhoneCall, MapPin, Clock3 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function ContactDetails() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">

      {/* background glow */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-72 h-72 bg-rose-200/30 rounded-full blur-3xl animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-pink-500 uppercase tracking-[4px] text-sm mb-4">
            Contact Details
          </p>

          <h2
            className="text-4xl md:text-5xl text-pink-600"
            style={{ fontFamily: "cursive" }}
          >
            Reach Happy Homes
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Phone */}
          <motion.a
            whileHover={{ y: -10, scale: 1.03 }}
            href="tel:9384526013"
            className="bg-white/40 backdrop-blur-2xl rounded-3xl p-8
            border border-white/60 text-center
            shadow-[0_10px_35px_rgba(244,114,182,0.15)]"
          >
            <PhoneCall className="mx-auto text-pink-500 mb-4" size={30} />
            <h3 className="text-pink-600 text-xl font-semibold mb-2">
              Phone
            </h3>
            <p className="text-gray-600">093845 26013</p>
          </motion.a>

          {/* WhatsApp */}
          <motion.a
            whileHover={{ y: -10, scale: 1.03 }}
            href="https://wa.me/919384526013"
            className="bg-white/40 backdrop-blur-2xl rounded-3xl p-8
            border border-white/60 text-center
            shadow-[0_10px_35px_rgba(244,114,182,0.15)]"
          >
            <FaWhatsapp className="mx-auto text-pink-500 mb-4" size={30} />
            <h3 className="text-pink-600 text-xl font-semibold mb-2">
              WhatsApp
            </h3>
            <p className="text-gray-600">Chat With Us</p>
          </motion.a>

          {/* Address */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white/40 backdrop-blur-2xl rounded-3xl p-8
            border border-white/60 text-center
            shadow-[0_10px_35px_rgba(244,114,182,0.15)]"
          >
            <MapPin className="mx-auto text-pink-500 mb-4" size={30} />
            <h3 className="text-pink-600 text-xl font-semibold mb-2">
              Address
            </h3>
            <p className="text-gray-600 leading-7 text-sm">
              2nd Street, Ponni Amman Kovil,
              No 336, Village High Rd,
              TNHB, Sholinganallur,
              Chennai – 600119
            </p>
          </motion.div>

          {/* Working Hours */}
          <motion.div
            whileHover={{ y: -10, scale: 1.03 }}
            className="bg-white/40 backdrop-blur-2xl rounded-3xl p-8
            border border-white/60 text-center
            shadow-[0_10px_35px_rgba(244,114,182,0.15)]"
          >
            <Clock3 className="mx-auto text-pink-500 mb-4" size={30} />
            <h3 className="text-pink-600 text-xl font-semibold mb-2">
              Working Hours
            </h3>
            <p className="text-gray-600">
              Open 24 / 7
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default ContactDetails;