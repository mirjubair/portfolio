"use client";
import { motion, Variants } from "framer-motion";
import { Github, Linkedin } from "lucide-react";
<div className="flex justify-center mb-6">
  <div className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
    MJ
  </div>
</div>


const name = "Mir Jubair Ul Rehman".split("");

// popping animation
const letterVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.5 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.05,
      type: "spring",
      stiffness: 500,
      damping: 30,
    },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <div className="relative z-10 text-center max-w-5xl">
        {/* One-line popping name */}
        <h1 className="text-5xl md:text-7xl font-extrabold whitespace-nowrap">
          {name.map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: name.length * 0.05 }}
          className="mt-6 text-lg md:text-2xl text-gray-300"
        >
          Software Engineer • Problem Solver
        </motion.p>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 flex justify-center gap-6"
        >
          <a
            href="https://github.com/mirjubair"
            target="_blank"
            className="p-3 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mir-jubair-ul-rehman-aa36b3259/"
            target="_blank"
            className="p-3 bg-white/10 rounded-full backdrop-blur-md hover:bg-white/20 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
