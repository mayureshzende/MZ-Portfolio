// import { motion } from "framer-motion";
import { motion } from "motion/react";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="md:h-[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-ornge border-dashed rounded-2xl mt-12 p-4"
    >
      <p className="font-bold text-cyn">{experience.job}</p>
      <p className="text-ornge">{experience.company}</p>
      <p className="text-lGrey">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 ">
        {experience.responsibilities.map((resp, index) => {
          return (
            <li className="text-white" key={index}>
              {resp}
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;
