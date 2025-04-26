import React from "react";
import { PiOctagonThin } from "react-icons/pi";
import { fadeIn } from "../../framerMotion/variants";
import { motion } from "framer-motion";
// import mz from "../../assets/images/mz-pp.png";
// import mzo1 from "../../assets/images/org-grad-mz.png";
import mzo2 from "../../assets/images/org2-grad-mz.png";
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.3)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className=" h-full flex items-center justify-center mt-10"
    >
      <img
        src={mzo2}
        alt="profile-pic"
        className="mx-h-[350px] h-[300px] w-auto rounded-full"
      />
      <div className=" absolute -z-10 flex justify-center items-center animate-pulse ">
        <PiOctagonThin className=" md:h-[80%] sm:h-[110%] min-h-[470px] w-auto text-cyn blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
