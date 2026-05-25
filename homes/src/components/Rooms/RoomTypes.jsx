import React from "react";
import { motion } from "framer-motion";
import { Snowflake, Fan } from "lucide-react";

function RoomTypes() {
  const rooms = [
    {
      title: "1 Sharing",
      image: "/room1.png",
      desc: "Private room with peaceful and premium comfort.",
    },
    {
      title: "2 Sharing",
      image: "/room2.png",
      desc: "Comfortable shared stay with spacious interiors.",
    },
    {
      title: "3 Sharing",
      image: "/room3.png",
      desc: "Modern and cozy shared accommodation.",
    },
    {
      title: "4 Sharing",
      image: "/room4.png",
      desc: "Affordable and comfortable homely stay.",
    },
  ];

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50">

      {/* floating bg glow */}
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-[#C9577C]/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-0 right-10 w-80 h-80 bg-[#C9577C]/20 rounded-full blur-3xl"
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
          <p className="text-[#C9577C] uppercase tracking-[4px] text-sm mb-4">
            Room Options
          </p>

          <h2
            className="text-4xl md:text-5xl text-[#C9577C]"
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
          >
            Choose Your Perfect Stay
          </h2>
        </motion.div>

        {/* cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden
              bg-white/40 backdrop-blur-2xl
              border border-white/60
              shadow-[0_10px_40px_rgba(201,87,124,0.18)]"
            >
              {/* shimmer */}
              <div
                className="absolute inset-0 opacity-40
                bg-gradient-to-r from-transparent via-white/40 to-transparent
                -translate-x-full hover:translate-x-full
                transition duration-1000"
              ></div>

              {/* image */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[#C9577C]/10 blur-xl"></div>

                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                  src={room.image}
                  alt={room.title}
                  className="relative w-full h-64 object-cover"
                />
              </div>

              {/* content */}
              <div className="p-6 text-center">
                <h3 className="text-2xl text-[#C9577C] font-semibold mb-3">
                  {room.title}
                </h3>

                <p className="text-gray-600 leading-7 mb-5">
                  {room.desc}
                </p>

                <div className="space-y-3">

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex justify-center items-center gap-2
                    bg-white/50 rounded-full px-4 py-2
                    backdrop-blur-md text-[#C9577C]"
                  >
                    <Snowflake size={18} />
                    <span>AC Available</span>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex justify-center items-center gap-2
                    bg-white/50 rounded-full px-4 py-2
                    backdrop-blur-md text-[#C9577C]"
                  >
                    <Fan size={18} />
                    <span>Non-AC Available</span>
                  </motion.div>

                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RoomTypes;