"use client";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "ATS Resume Analyzer",
    desc: "AI-powered resume analyzer with ATS scoring.",
    link: "https://github.com/mirjubair/ats-resume-analyzer",
  },
  {
    title: "Job Portal Chat App",
    desc: "A real-time job portal chat application.",
    link: "https://github.com/mirjubair/react-job-portal",
  },
  {
    title: "CI/CD Auto Deployment",
    desc: "Tool for automated deployment pipelines.",
    link: "https://github.com/mirjubair/Auto-deployment-Tool",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            🚀 Projects
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {projects.map((proj, idx) => (
            <Reveal key={idx}>
              <a
                href={proj.link}
                target="_blank"
                className="glass-card block p-6 relative group"
              >
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition">
                  {proj.title}
                </h3>
                <p className="text-gray-300 mt-2">{proj.desc}</p>

                {/* Subtle glowing border on hover */}
                <span className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-purple-500/40 pointer-events-none transition"></span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
