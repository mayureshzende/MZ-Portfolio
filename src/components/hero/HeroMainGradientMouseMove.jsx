import React, { useState } from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMainGradientMouseMove = () => {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth) * 100;
    const y = (clientY / window.innerHeight) * 100;
    setPosition({ x, y });
  };
  return (
    <div className="pt-35 pb-18" onMouseMove={handleMouseMove}>
      {/* Moving Gradient Background */}
      <div
        className="absolute inset-0 transition-all duration-300 ease-out -z-10"
        style={{
          background: `radial-gradient(at ${position.x}% ${position.y}%, #009fb3, #fb9718)`,
        }}
      />
      {/* to remove left right pading while finishing */}
      <div className="flex md:flex-row sm:flex-col sm:gap-8 max-w-[1200px] mx-auto justify-between items-center relative px-4 pl-15 pr-15">
        {/* <GradientMouseMove/ */}
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMainGradientMouseMove;
