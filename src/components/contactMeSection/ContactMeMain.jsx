import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 "
    >
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <h2 className="text-6xl text-cyn mb-10 text-center">Contact Me</h2>
      </motion.div>
      <div className="flex justify-between gap-24 bg-brw p-8 rounded-2xl lg:flex-row sm:flex-col">
        <ContactMeLeft />
        <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
