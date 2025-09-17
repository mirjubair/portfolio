"use client";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-3xl font-bold text-center text-purple-400">🎓 Education</h2>
        </Reveal>
        <Reveal>
          <div className="mt-8 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-300">
              B.Tech. in Electronics & Communication Engineering
            </h3>
            <p className="text-sm text-gray-400">
              University of Kashmir, India — Nov 2021 – Aug 2025 (Expected)
            </p>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Key Courses: Data Structures, Algorithms, Operating Systems, Web Development, COA, Computer Networks
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
