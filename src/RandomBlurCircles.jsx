import { useEffect, useState } from "react";

export default function RandomBlurCircles() {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const generateCircles = () => {
      const totalCircles = 36;
      const newCircles = [];

      for (let i = 0; i < totalCircles; i++) {
        const color =
          i % 2 === 0
            ? "rgba(255, 165, 0, 0.35)" // orange
            : "rgba(0, 255, 255, 0.35)"; // cyan
        newCircles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 50 + 30, // 20px - 60px
          color,
          blur: Math.random() * 15 + 15, // 15px - 30px
          dx: (Math.random() - 0.5) * 3, // faster drift
          dy: (Math.random() - 0.5) * 3, // faster drift
        });
      }

      setCircles(newCircles);
    };

    generateCircles();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCircles((prevCircles) =>
        prevCircles.map((circle) => {
          let newX = circle.x + circle.dx;
          let newY = circle.y + circle.dy;

          // Bounce off edges
          if (newX < 0 || newX > window.innerWidth) circle.dx *= -1;
          if (newY < 0 || newY > window.innerHeight) circle.dy *= -1;

          return {
            ...circle,
            x: newX,
            y: newY,
          };
        })
      );
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {circles.map((circle, index) => (
        <div
          key={index}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: circle.x,
            top: circle.y,
            width: circle.size,
            height: circle.size,
            backgroundColor: circle.color,
            filter: `blur(${circle.blur}px)`,
            transform: "translate(-50%, -50%)",
            opacity: 0.6,
          }}
        />
      ))}
    </div>
  );
}

// import { useEffect, useState } from "react";

// export default function RandomBlurCircles() {
//   const [circles, setCircles] = useState([]);

//   useEffect(() => {
//     const generateCircles = () => {
//       const newCircles = Array.from({ length: 10 }).map(() => ({
//         x: Math.random() * window.innerWidth,
//         y: Math.random() * window.innerHeight,
//         size: Math.random() * 80 + 40, // 40px to 120px
//         color:
//           Math.random() > 0.5
//             ? "rgba(0, 255, 255, 0.3)"
//             : "rgba(255, 165, 0, 0.3)", // cyan or orange with transparency
//         blur: Math.random() * 20 + 20, // blur amount
//         dx: (Math.random() - 0.5) * 1.5, // random small X velocity
//         dy: (Math.random() - 0.5) * 1.5, // random small Y velocity
//       }));
//       setCircles(newCircles);
//     };

//     generateCircles();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCircles((prevCircles) =>
//         prevCircles.map((circle) => {
//           let newX = circle.x + circle.dx;
//           let newY = circle.y + circle.dy;

//           // Bounce off the edges
//           if (newX < 0 || newX > window.innerWidth) circle.dx *= -1;
//           if (newY < 0 || newY > window.innerHeight) circle.dy *= -1;

//           return {
//             ...circle,
//             x: newX,
//             y: newY,
//           };
//         })
//       );
//     }, 30); // update every 30ms

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed inset-0 -z-10 overflow-hidden">
//       {circles.map((circle, index) => (
//         <div
//           key={index}
//           className="absolute rounded-full pointer-events-none"
//           style={{
//             left: circle.x,
//             top: circle.y,
//             width: circle.size,
//             height: circle.size,
//             backgroundColor: circle.color,
//             filter: `blur(${circle.blur}px)`,
//             transform: "translate(-50%, -50%)",
//             opacity: 0.6,
//           }}
//         />
//       ))}
//     </div>
//   );
// }
