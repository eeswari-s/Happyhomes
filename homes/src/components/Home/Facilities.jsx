import React from "react";
import { motion } from "framer-motion";
import {
  BedDouble,
  Snowflake,
  Bath,
  Zap,
  ShieldCheck,
  Sparkles,
  Utensils,
  Droplets,
  Flame,
  Wifi,
  WashingMachine,
  Lock,
} from "lucide-react";

function Facilities() {
  const amenities = [
    { icon: <BedDouble size={30} />, title: "Bed, Mattress, Pillow & Cupboard" },
    { icon: <Snowflake size={30} />, title: "AC / Non-AC Rooms" },
    { icon: <Bath size={30} />, title: "Attached Bathrooms" },
    { icon: <Zap size={30} />, title: "Electricity & Water Supply" },
    { icon: <ShieldCheck size={30} />, title: "24/7 CCTV Security" },
    { icon: <Sparkles size={30} />, title: "Cleaning Service" },
    { icon: <Utensils size={30} />, title: "Breakfast, Lunch & Dinner" },
    { icon: <Droplets size={30} />, title: "RO Drinking Water" },
    { icon: <Flame size={30} />, title: "Induction Stove" },
    { icon: <Wifi size={30} />, title: "High-Speed Wi-Fi" },
    { icon: <WashingMachine size={30} />, title: "Washing Machine" },
    { icon: <Lock size={30} />, title: "Personal Lockers" },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">

      {/* animated glow blobs */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute top-0 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl"
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
        className="absolute bottom-0 right-10 w-80 h-80 bg-rose-200/30 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-pink-500 uppercase tracking-[4px] text-sm mb-4">
            Amenities
          </p>

          <h2
            className="text-4xl md:text-5xl text-pink-600"
            style={{ fontFamily: "cursive" }}
          >
            Everything You Need, All In One Place
          </h2>
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.04,
              }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
              className="rounded-3xl p-6 text-center
              bg-white/40 backdrop-blur-2xl
              border border-white/60
              shadow-[0_10px_35px_rgba(244,114,182,0.12)]
              hover:shadow-[0_15px_45px_rgba(244,114,182,0.22)]"
            >
              <div className="text-pink-500 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="text-pink-700 font-semibold leading-7 text-base">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Facilities;