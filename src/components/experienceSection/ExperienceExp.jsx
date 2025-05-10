import { fadeIn } from "../../framerMotion/variants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { workExperiences } from "../constants/data";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import ExperienceText from "./ExperienceText";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      className="hover:scale-105 transition-all duration-300"
      contentStyle={{
        background: "#53423e",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #15d1e9" }}
      date={experience.duration}
      dateClassName="text-wht"
      iconStyle={{ background: "#3f4441", color: "#fff" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.id}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-ornge text-base font-bold">
          {experience.position}
        </h3>
        <p className=" text-cyn text-base font-mono" style={{ margin: 0 }}>
          {experience.company}
        </p>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.duties.map((duty, index) => (
          <li
            key={`duty-point-${index}`}
            className="text-white pl-1 text-xs md:text-sm lg:text-md md:tracking-wider"
          >
            {duty}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};
const ExperienceExp = () => {
  return (
    <>
      <div id="experience" className="max-w-[1200px] mx-auto px-4">
        <motion.div
          variants={fadeIn("down", 0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
        >
          <ExperienceText />
        </motion.div>
      </div>
      <section
        className="w-full flex justify-center mb-20 px-4"
        id="experience"
      >
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          <div className="w-full">
            <motion.h2
              className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
                Work Experience
              </LinearGradient> */}
            </motion.h2>
          </div>

          <VerticalTimeline lineColor={"#f1e1d9"}>
            {workExperiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
              ></ExperienceCard>
            ))}
          </VerticalTimeline>
        </div>
      </section>
    </>
  );
};

export default ExperienceExp;

ExperienceCard.propTypes = {
  experience: PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    duties: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
