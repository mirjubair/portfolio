"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 bg-gradient-to-r from-purple-700/30 via-indigo-700/30 to-purple-700/30 backdrop-blur-md border-t border-white/10">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-400 text-sm"
      >
        © {new Date().getFullYear()} Mir Jubair Ul Rehman. All rights reserved.
      </motion.p>
    </footer>
  );
}
