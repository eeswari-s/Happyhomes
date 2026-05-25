import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-pink-500/95 backdrop-blur-md border-b border-pink-300 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <img
              src="/logo.png"
              alt="Happy Homes Logo"
              className="w-12 h-12 md:w-14 md:h-14 object-contain
              drop-shadow-[0_0_15px_rgba(255,255,255,0.95)]
              animate-pulse"
            />

            <div>
              <h1
                className="text-white text-2xl md:text-3xl font-bold tracking-wide"
                style={{
                  textShadow:
                    "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.6)",
                }}
              >
                Happy Homes
              </h1>

              <p className="text-white text-xs md:text-sm tracking-widest">
                Stay Luxury
              </p>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="text-white font-medium relative transition duration-300
                hover:text-pink-100
                after:absolute after:left-0 after:-bottom-1 after:h-[2px]
                after:w-0 after:bg-white
                hover:after:w-full
                after:transition-all after:duration-300"
              >
                {link.name}
              </NavLink>
            ))}

            {/* Call Button */}
            <a
              href="tel:9043249842"
              className="flex items-center gap-2 bg-white text-pink-500 px-5 py-2 rounded-full font-semibold
              shadow-[0_0_20px_rgba(255,255,255,0.9)]
              hover:shadow-[0_0_35px_rgba(255,255,255,1)]
              hover:scale-105 transition-all duration-500 animate-pulse"
            >
              <PhoneCall size={18} />
              90432 49842
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-pink-400 px-6 py-6 space-y-5 shadow-lg"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="block text-white text-lg font-medium"
              >
                {link.name}
              </NavLink>
            ))}

            <a
              href="tel:9043249842"
              className="inline-flex items-center gap-2 bg-white text-pink-500 px-5 py-2 rounded-full font-semibold
              shadow-[0_0_20px_rgba(255,255,255,0.9)]"
            >
              <PhoneCall size={18} />
              90432 49842
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;