import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const ContactInfo = () => {
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="flex flex-col gap-4 text-wht"
    >
      <SingleInfo text="mayureshzende@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+91 XXXXXXXXXX" Image={FiPhone} />
      <SingleInfo text="Pune, India" Image={IoLocationOutline} />
    </motion.div>
  );
};

export default ContactInfo;
