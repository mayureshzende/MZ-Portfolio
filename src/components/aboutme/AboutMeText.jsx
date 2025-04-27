import { Link } from "react-scroll";
import TextHighlight from "../TextHighlight";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start md:text-left sm:text-center sm:items-center sm:justify-center">
      <h2 className="font-montserrat text-6xl text-cyn mb-10">About Me</h2>
      <p className="text-white text-lg font-montserrat">
        Full Stack Developer with 5+ years of experience in building
        <TextHighlight> scalable web apps</TextHighlight>, and quickly
        <TextHighlight> adapting to new technologies.</TextHighlight>{" "}
        <TextHighlight>Proficient in JavaScript.js, React.js, </TextHighlight>
        <TextHighlight>
          {" "}
          Node.js, Express.js, MongoDB, (MERN stack), and Python.{" "}
        </TextHighlight>
        Skilled in
        <TextHighlight>
          {" "}
          microservices, REST APIs, testing, and cloud deployments
        </TextHighlight>{" "}
        (AWS, Docker, Jenkins). Strong focus on performance,
        <TextHighlight>
          {" "}
          clean code, and collaboration with QA and Product.
        </TextHighlight>
      </p>
      <button className="border border-ornge rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-ornge  sm:justify-center sm:items-center cursor-pointer text-white hover:text-dCyan hover:font-bold transition-all duration-500  md:self-start sm:self-center sm:hidden">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="flex cursor-pointer text-white hover:text-cyan transition-all duration-500 md:self-start sm:self-center"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
