"use client";
import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Hero() {
  const name = "Mir Jubair Ul Rehman";

  // Animation for popping characters
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      {/* MJ Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-6 text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"
      >
        MJ
      </motion.div>

      {/* Animated Name */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={container}
        className="text-3xl sm:text-5xl md:text-7xl font-extrabold tracking-wide flex flex-wrap justify-center text-center leading-tight"
      >
        {name.split("").map((char, i) => (
          <motion.span
            key={i}
            variants={child}
            custom={i}
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: name.length * 0.05 }}
        className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300"
      >
        Software Developer · Problem Solver
      </motion.p>
    </section>
  );
}
