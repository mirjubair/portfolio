"use client";
import { motion, Variants } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  const name = "Mir Jubair Ul Rehman";

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 500, damping: 30 },
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
        className="mb-6 relative w-20 h-20 flex items-center justify-center 
                   rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 
                   text-white font-extrabold text-3xl shadow-[0_0_30px_rgba(168,85,247,0.7)]"
      >
        MJ
        <span className="absolute inset-0 rounded-full border-4 border-purple-400/50 animate-pulse"></span>
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

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-8 flex gap-6"
      >
        <a
          href="https://github.com/mirjubair"
          target="_blank"
          className="p-3 rounded-full bg-white/5 border border-purple-400/30 
                     text-purple-300 hover:text-white hover:bg-purple-500/20 
                     transition-all duration-300 hover:scale-110"
        >
          <Github size={28} />
        </a>
        <a
          href="https://linkedin.com/in/mirjubair"
          target="_blank"
          className="p-3 rounded-full bg-white/5 border border-indigo-400/30 
                     text-indigo-300 hover:text-white hover:bg-indigo-500/20 
                     transition-all duration-300 hover:scale-110"
        >
          <Linkedin size={28} />
        </a>
      </motion.div>
    </section>
  );
}
