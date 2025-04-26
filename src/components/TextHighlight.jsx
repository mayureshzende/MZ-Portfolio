import React from "react";

const TextHighlight = ({ children }) => {
  return (
    <span className="text-transparent font-extrabold md:text-lg bg-clip-text bg-gradient-to-r from-cyn to-ornge ">
      {children}
    </span>
  );
};

export default TextHighlight;
