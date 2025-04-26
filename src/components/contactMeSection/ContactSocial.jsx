import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactSocial = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="flex gap-4"
    >
      <SingleContactSocial
        link="https://www.linkedin.com/in/mayuresh-zende/"
        Icon={FaLinkedinIn}
      />
      <SingleContactSocial
        link="https://github.com/mayureshzende"
        Icon={FiGithub}
      />
      <SingleContactSocial
        link="https://x.com/MayureshZende"
        Icon={FaTwitter}
      />
    </motion.div>
  );
};

export default ContactSocial;
