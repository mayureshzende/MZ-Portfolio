// HeroSection.jsx
import { useState } from "react";
import Particles from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Gradients() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    setPosition({ x, y });

    const text = document.getElementById("hero-text");
    const rotateX = (window.innerHeight / 2 - clientY) / 25;
    const rotateY = (clientX - window.innerWidth / 2) / 25;

    if (text) {
      text.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    }
  };

  const handleMouseLeave = () => {
    const text = document.getElementById("hero-text");
    if (text) {
      text.style.transform = `rotateX(0deg) rotateY(0deg)`;
    }
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Moving Gradient Background */}
      <div
        className="absolute inset-0 transition-all duration-300 ease-out -z-10"
        style={{
          background: `radial-gradient(at ${position.x}% ${position.y}%, rgba(79,70,229,0.6), rgba(147,51,234,0.4))`,
        }}
      />

      {/* Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#0d47a1",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      {/* Hero Content with Tilt */}
      <div
        id="hero-text"
        className="text-center z-10 transition-transform duration-200 ease-out"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Hi, I'm Mayuresh 🚀
        </h1>
        <p className="mt-4 text-xl text-gray-200">
          Full Stack Developer | MERN | Python | Cloud Enthusiast
        </p>
        <div className="mt-6">
          <a
            href="#"
            className="inline-block px-6 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-indigo-100 transition"
          >
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}
