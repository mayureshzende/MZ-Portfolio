import { PiOctagonThin } from "react-icons/pi";
import { fadeIn } from "../../framerMotion/variants";
import { motion } from "framer-motion";
// import mz from "../../assets/images/mz-pp.png";
// import mzo1 from "../../assets/images/org-grad-mz.png";
import mzo2 from "../../assets/images/org2-grad-mz.png";
const HeroPic = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className=" h-full flex items-center justify-center md:mt-20 sm:mt-10"
      >
        <img
          src={mzo2}
          alt="Mayuresh Zende"
          className="max-h-[380px] h-[320px] w-auto rounded-full"
        />

        <div className=" absolute -z-10 flex justify-center items-center animate-pulse overflow-hidden">
          <PiOctagonThin className=" md:h-[75%] sm:h-[120%] min-h-[470px] w-auto text-cyn blur-md animate-[spin_20s_linear_infinite] " />
        </div>
      </motion.div>
    </>
  );
};

export default HeroPic;
