import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import Hero from "./Hero";

function ParticlesBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await initParticlesEngine(async (engine) => await loadSlim(engine));
      setInit(true);
    };
    initParticles();
  }, []);

  if (!init) return null;

  return (
    <div className="relative w-full h-[80vh] lg:h-[100vh]">
      <Particles
        id="tsparticles"
        className="absolute inset-0 w-full h-full -z-10"
        options={{
          background: { color: "#000000" },
          fpsLimit: 60,
          particles: {
            number: { value: 160, density: { enable: true, area: 900 }, limit: 10 },
            color: { value: ["#b273fa", "#ffffff", "#66ff99"] },
            shape: {
              type: ["circle", "triangle", "edge"],
              stroke: { width: 0, color: "#ffffff" },
            },
            opacity: {
              value: 0.9,
              random: true,
              anim: { enable: true, speed: 1.7, opacity_min: 0.3, sync: false },
            },
            size: {
              value: 4,
              random: true,
              anim: { enable: true, speed: 4, size_min: 1, sync: false },
            },
            links: {
              enable: true,
              distance: 140,
              color: "#b273fa",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 3.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "destroy", //"out",
              },
              bounce: false,
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: ["grab", "repulse"] },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 220, links: { opacity: 0.6 } },
              bubble: { distance: 300, size: 12, duration: 2, opacity: 0.9, speed: 3 },
              repulse: { distance: 180, duration: 0.5 },
              push: { quantity: 6 },
              remove: { quantity: 2 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative mt-[25vh] lg:mt-[25vh] md:mt-[20vh] sm:mt-[20vh]"><Hero /></div>
    </div>
  );
}

export default ParticlesBackground;
