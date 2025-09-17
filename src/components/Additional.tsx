"use client";
import Reveal from "./Reveal";

export default function Additional() {
  return (
    <section id="additional" className="py-20">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-3xl font-bold text-center text-purple-400">✨ Additional Info</h2>
        </Reveal>
        <Reveal>
          <ul className="mt-8 space-y-4">
            <li className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-md text-gray-300">
              <strong className="text-indigo-300">Soft Skills:</strong> Communication, Team Collaboration, Time Management, Critical Thinking
            </li>
            <li className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-md text-gray-300">
              <strong className="text-indigo-300">Achievements:</strong> Qualified GATE CS 2025, Solved 500+ LeetCode/GFG problems
            </li>
            <li className="p-4 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-md text-gray-300">
              <strong className="text-indigo-300">Interests:</strong> Open Source, Football, Technical Blogging
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
