"use client";
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";
import Reveal from "@/components/Reveal";

const skills = [
  { name: "Python", level: 90, fill: "url(#grad-py)" },
  { name: "Django", level: 70, fill: "url(#grad-django)" },
  { name: "JavaScript", level: 80, fill: "url(#grad-js)" },
  { name: "Java", level: 75, fill: "url(#grad-java)" },
  { name: "C/C++", level: 70, fill: "url(#grad-cpp)" },
  { name: "C#", level: 60, fill: "url(#grad-cs)" },
  { name: "MERN Stack", level: 60, fill: "url(#grad-mern)" },
  { name: "React Native", level: 50, fill: "url(#grad-rn)" },
  { name: ".NET", level: 50, fill: "url(#grad-dotnet)" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto max-w-6xl">
        <Reveal>
          <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            💡 Skills
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {skills.map((skill, idx) => (
            <Reveal key={idx}>
              <div className="glass-card p-6 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-500 relative">
                <ResponsiveContainer width={200} height={200}>
                  <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="70%"
                    outerRadius="100%"
                    barSize={15}
                    data={[skill]}
                    startAngle={90}
                    endAngle={-270}
                  >
                    <defs>
                      <linearGradient id="grad-py" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#facc15" />
                        <stop offset="100%" stopColor="#2563eb" />
                      </linearGradient>
                      <linearGradient id="grad-django" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#22c55e" />
                        <stop offset="100%" stopColor="#15803d" />
                      </linearGradient>
                      <linearGradient id="grad-js" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#facc15" />
                        <stop offset="100%" stopColor="#f97316" />
                      </linearGradient>
                      <linearGradient id="grad-java" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#f87171" />
                      </linearGradient>
                      <linearGradient id="grad-cpp" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                      <linearGradient id="grad-cs" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#9333ea" />
                        <stop offset="100%" stopColor="#c084fc" />
                      </linearGradient>
                      <linearGradient id="grad-mern" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient id="grad-rn" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient id="grad-dotnet" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#6366f1" />
                        <stop offset="100%" stopColor="#312e81" />
                      </linearGradient>
                    </defs>

                    <PolarAngleAxis
                      type="number"
                      domain={[0, 100]}
                      angleAxisId={0}
                      tick={false}
                    />
                    <RadialBar dataKey="level" fill={skill.fill} />
                  </RadialBarChart>
                </ResponsiveContainer>

                <div className="absolute text-center">
                  <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                  <p className="text-gray-300 text-sm">{skill.level}%</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
