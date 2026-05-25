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
    <header
      className="sticky top-0 z-50 w-full
      bg-gradient-to-r from-[#C95379] to-[#D66588]
      backdrop-blur-md
      border-b border-white/10
      shadow-[0_8px_30px_rgba(201,83,121,0.35)]"
    >
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
              drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            />

     <div>
  <h1
    className="text-white text-2xl md:text-3xl"
    style={{
      fontFamily: "'Anton', sans-serif",
      letterSpacing: "2px",
      textShadow: "0 0 10px rgba(255,255,255,0.35)",
    }}
  >
    HAPPY HOMES
  </h1>

  <p
    className="text-white/95 text-lg md:text-xl -mt-1"
    style={{
      fontFamily: "'Great Vibes', cursive",
    }}
  >
    Stay Luxury
  </p>
</div>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-medium transition duration-300
                  ${
                    isActive
                      ? "text-white"
                      : "text-white/90 hover:text-white"
                  }
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:bg-white
                  after:transition-all after:duration-300
                  ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Call Button */}
            <a
              href="tel:9043249842"
              className="flex items-center gap-2
              bg-white/90 text-[#C95379]
              px-6 py-2.5 rounded-full font-semibold
              backdrop-blur-xl
              shadow-[0_0_20px_rgba(255,255,255,0.35)]
              hover:scale-105 transition duration-300"
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

      {/* Mobile Nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="md:hidden
            bg-[#CA557B]
            px-6 py-6
            space-y-5"
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
              className="inline-flex items-center gap-2
              bg-white text-[#C95379]
              px-5 py-2 rounded-full font-semibold"
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