import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl font-montserrat  uppercase text-cyn"
      >
        Full-Stack Developer
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-ornge font-bold uppercase font-montserrat"
      >
        Mayuresh <br className="sm:hidden md:block" />
        Zende
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-white mt-2 text-lg font-montserrat"
      >
        Full Stack Developer with 5+ years of experience
        <br />
        in building scalable web apps using MERN Stack,
        <br />
        and quickly adapting to new technologies.
      </motion.p>
    </div>
  );
};

export default HeroText;
