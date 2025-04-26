import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import cmimg from "../../assets/images/email-image.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <img src={cmimg} alt="email image" className="max-w-[300px]" />
      </motion.div>
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;
