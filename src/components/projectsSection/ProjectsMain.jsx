import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import prj1 from "../../assets/images/website-img-1.jpg";
import prj2 from "../../assets/images/github-actions.png";
import prj3 from "../../assets/images/programming 01_AdobeStock_239326573.jpeg";
import prj4 from "../../assets/images/website-img-4.jpg";

const projects = [
  {
    name: "Socail Dev Connector",
    year: "Dev 2024",
    align: "right",
    image: prj1,
    link: "https://github.com/mayureshzende/DevConnect",
  },
  {
    name: "GitHub Actions for Unit Test",
    year: "Nov 2024",
    align: "left",
    image: prj2,
    link: "https://github.com/mayureshzende/Danger-JS-Cool",
  },
  {
    name: "CodeWars Solutions",
    year: "Ongoing",
    align: "right",
    image: prj3,
    link: "https://github.com/mayureshzende/CodeWars-Solutions",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
