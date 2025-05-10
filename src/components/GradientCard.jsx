import { useState } from "react";

export default function GradientCard() {
  const [position, setPosition] = useState({ x: "50%", y: "50%" });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPosition({ x: `${x}%`, y: `${y}%` });
  };

  const handleMouseLeave = () => {
    setPosition({ x: "50%", y: "50%" });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-80 h-48 bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-out"
    >
      {/* Gradient highlight */}
      <div
        className="absolute inset-0 rounded-xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${position.x} ${position.y}, rgba(255, 165, 0, 0.4), rgba(0, 255, 255, 0.2), transparent 60%)`,
          transition: "background 0.2s ease",
        }}
      />
      {/* Card content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center text-white text-2xl font-bold">
        Hover Me ✨
      </div>
    </div>
  );
}
