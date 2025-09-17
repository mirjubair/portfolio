"use client";
import Particles from "react-tsparticles";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 bg-black">
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: false }, // keeps inside container
          background: { color: "#000000" },
          fpsLimit: 60,
          particles: {
            number: { value: 200, density: { enable: true, area: 1200 } },
            size: { value: { min: 1, max: 2 } },
            move: { enable: true, speed: 0.3 },
            opacity: { value: 0.7 },
            color: { value: "#ffffff" },
            links: { enable: false },
          },
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 120 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
