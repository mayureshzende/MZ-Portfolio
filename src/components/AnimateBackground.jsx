import { useEffect, useState } from "react";

export default function AnimateBackground() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * 100,
        y: Math.random() * 100,
      });
    }, 3000); // Change position every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 -z-10 transition-all duration-1000 ease-in-out"
      style={{
        background: `radial-gradient(at ${position.x}% ${position.y}%, #6366f1, #8b5cf6, #ec4899)`,
      }}
    />
  );
}
