"use client";
import Reveal from "@/components/Reveal";

export default function ProfileSummary() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <div className="glass-card p-8 text-center">
            <h2 className="text-3xl font-bold text-purple-300 mb-4">
              Profile Summary
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Proficient and motivated Software Engineer with core expertise in
              <span className="font-semibold text-purple-400"> Python</span>,
              Data Structures & Algorithms,
              <span className="font-semibold text-purple-400"> Django</span>, and
              <span className="font-semibold text-purple-400"> JavaScript</span>.
              Skilled in developing scalable web applications using the
              <span className="font-semibold text-purple-400"> MERN stack</span>{" "}
              (MongoDB, Express.js, React, Node.js) and experienced with{" "}
              <span className="font-semibold text-purple-400">.NET</span> and{" "}
              <span className="font-semibold text-purple-400">
                React Native
              </span>{" "}
              for cross-platform solutions. Strong foundation in computer
              science fundamentals including OOP, Operating Systems, and
              Networking. Adept at building end-to-end solutions, from backend
              APIs to dynamic frontends, with proven ability to deliver
              efficient and maintainable applications in collaborative Agile
              environments.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
