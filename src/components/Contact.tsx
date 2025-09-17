"use client";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto text-center max-w-3xl">
        <Reveal>
          <h2 className="text-3xl font-bold text-purple-400">📩 Contact</h2>
        </Reveal>
        <Reveal>
          <div className="mt-8 p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg">
            <p className="text-gray-300">
              Email:{" "}
              <a
                href="mailto:ujubairulrehman@gmail.com"
                className="text-indigo-300 underline"
              >
                ujubairulrehman@gmail.com
              </a>
            </p>
            <p className="mt-3 text-gray-300">Phone: +91 9086053432</p>
            <p className="mt-3 text-gray-300">Location: Jammu and Kashmir, India</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
