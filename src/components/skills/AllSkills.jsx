import SingleSkill from "./SingleSkill";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "TypeScript",
    icon: SiTypescript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "Redux",
    icon: SiRedux,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
];

const categories = {
  language: [
    { icon: RiTailwindCssFill, name: "Html" },
    { icon: RiTailwindCssFill, name: "Css" },
    { icon: RiTailwindCssFill, name: "Javascript" },
    { icon: RiTailwindCssFill, name: "Typescript" },
  ],
  frontend: [
    { icon: RiJavascriptFill, name: "React Js" },
    { icon: RiJavascriptFill, name: "Redux" },
    { icon: RiJavascriptFill, name: "Next js" },
    { icon: RiJavascriptFill, name: "Tailwind Css" },
  ],
  backend: [
    { icon: FaReact, name: "Node Js" },
    { icon: FaReact, name: "Express Js" },
  ],
  database: [
    { icon: FaReact, name: "MongoDb" },
    { icon: FaReact, name: "Mongoose" },
  ],

  DevOps: [
    { icon: RiJavascriptFill, name: "Git" },
    { icon: RiJavascriptFill, name: "Github" },
    { icon: RiJavascriptFill, name: "Docker" },

    { icon: FaReact, name: "Vps" },
    { icon: FaReact, name: "Linux" },
    { icon: FaReact, name: "Cpanel" },
    { icon: FaReact, name: "Vercel" },
  ],
  tools: [
    { icon: SiTypescript, name: "Vs code" },
    { icon: SiTypescript, name: "Webstorm" },
    { icon: SiTypescript, name: "Postman" },
  ],
};

const AllSkills = () => {
  return (
    <div>
      <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
        {skills.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("up", `0.${index}`)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0 }}
              key={index}
            >
              <SingleSkill
                key={index}
                text={item.skill}
                imgSvg={<item.icon />}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default AllSkills;

/*

      <div className="flex flex-col gap-6 p-4">
        {Object.entries(categories).map(([category, skills]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold mb-3 capitalize">
              {category}
            </h2>
            <div className="flex flex-wrap justify-start items-center gap-5">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1, // Cascading effect
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="bg-lGrey text-cyn text-2xl py-2 px-3 font-bold flex gap-2 items-center justify-center border border-border rounded-lg hover:bg-ornge hover:shadow-lg"
                >
                  <skill.icon className="w-7 h-7" />
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

  */
