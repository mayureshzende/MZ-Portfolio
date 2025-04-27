import { useEffect, useState } from "react";

export default function BlurredAnimatedBackground() {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const generateCircles = () => {
      const newCircles = Array.from({ length: 8 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 80 + 40, // 40px to 120px
        color:
          Math.random() > 0.5
            ? "rgba(0, 255, 255, 0.4)"
            : "rgba(255, 165, 0, 0.4)", // cyan or orange with transparency
        blur: Math.random() * 20 + 20, // 20px to 40px blur
        speed: Math.random() * 2 + 0.5, // orbit speed
        angle: Math.random() * 360,
      }));
      setCircles(newCircles);
    };

    generateCircles();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => ({
          ...circle,
          angle: circle.angle + circle.speed,
          x: circle.x + Math.cos(circle.angle) * 0.5,
          y: circle.y + Math.sin(circle.angle) * 0.5,
        }))
      );
    }, 30); // Move every 30ms for smoothness

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {circles.map((circle, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            left: circle.x,
            top: circle.y,
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            filter: `blur(${circle.blur}px)`,
            transform: "translate(-50%, -50%)",
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
