"use client";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto max-w-4xl">
        <Reveal>
          <div className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg border border-white/10">
            <h2 className="text-3xl font-bold text-purple-400">About Me</h2>
            <p className="mt-4 text-gray-300 leading-relaxed">
              Dedicated and performance-driven Software Engineer with expertise
              in Python, Django, REST APIs, and ReactJS. Strong foundation in
              Data Structures, Algorithms, and Computer Science fundamentals.
              Adept at building scalable applications with modern tools and
              Agile workflows.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
