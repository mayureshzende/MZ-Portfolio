import AboutMeText from "./AboutMeText";
import AboutMeImage from "./AboutMeImage";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import ContactSocial from "../contactMeSection/ContactSocial";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <motion.div
        variants={fadeIn("right", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
      >
        <AboutMeText />
        <div className="mt-6 md:flex md:w-full md:justify-start md:items-start sm:flex sm:w-full sm:justify-center sm:items-center">
          <ContactSocial />
        </div>
      </motion.div>
      <div className="md:block sm:hidden">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          <AboutMeImage />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeMain;
