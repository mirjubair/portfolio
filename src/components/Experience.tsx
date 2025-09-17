"use client";
import Reveal from "./Reveal";

export default function Experience() {
  const items = [
    {
      role: "Embedded Systems Intern",
      company: "e-Yantra, IIT Bombay",
      period: "Jan 2024 – Apr 2024",
      bullets: [
        "Built Arduino-based robotic modules using ATmega2560 & C.",
        "Programmed real-time sensor-actuator workflows.",
        "Achieved top 5% rank among 3000+ participants.",
      ],
    },
    {
      role: "AI/ML Intern",
      company: "Edunet Foundation + Microsoft",
      period: "Jun 2023 – Aug 2023",
      bullets: [
        "Trained ML models using scikit-learn & Pandas.",
        "Developed pipelines with 85%+ accuracy.",
        "Learned cloud deployment on Microsoft Azure & GitHub CI.",
      ],
    },
    {
      role: "Web Developer Intern",
      company: "Codecasa",
      period: "Jun 2022 – Aug 2022",
      bullets: [
        "Developed full-stack apps using Django + React.",
        "Designed secure REST APIs & authentication.",
        "Improved app efficiency by 30%.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-3xl font-bold text-center text-purple-400">🛠 Experience</h2>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {items.map((exp, i) => (
            <Reveal key={i}>
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-lg hover:scale-[1.02] transition">
                <h3 className="text-xl font-semibold text-indigo-300">
                  {exp.role}
                </h3>
                <p className="text-sm text-gray-400">{exp.company} — {exp.period}</p>
                <ul className="mt-3 list-disc list-inside text-gray-300 space-y-1">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
