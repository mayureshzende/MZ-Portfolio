import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start md:text-left sm:text-center sm:items-center sm:justify-center">
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h2 className="font-montserrat text-6xl text-cyn mb-10">About Me</h2>
        <p className="text-white font-montserrat">
          Full Stack Developer with 5+ years of experience in building scalable
          web apps, and quickly adapting to new technologies. Proficient in
          JavaScript.js, React.js, Node.js, Express.js, MongoDB, (MERN stack),
          and Python. Skilled in microservices, REST APIs, testing, and cloud
          deployments (AWS, Docker, Jenkins). Strong focus on performance, clean
          code, and collaboration with QA and Product.
        </p>
        <button className="border border-ornge rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-ornge  sm:justify-center sm:items-center cursor-pointer text-white hover:text-dCyan hover:font-bold transition-all duration-500  md:self-start sm:self-center sm:hidden">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            to="projects"
            className="flex cursor-pointer text-white hover:text-cyan transition-all duration-500 md:self-start sm:self-center"
          >
            My Projects
          </Link>
        </button>
      </motion.div>
    </div>
  );
};

export default AboutMeText;
