import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const currentYear = new Date().getFullYear();
const FooterMain = () => {
  const footerLinks = [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ];
  return (
    <motion.div
      variants={fadeIn("down", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className="px-4"
    >
      <div className="w-full h-[1px] bg-lGrey mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-wht ">Mayuresh Zende</p>
        <ul className="flex gap-4 text-wht text-xl">
          {footerLinks.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-120}
                  to={item.section}
                  className="hover:text-cyn transition-all duration-500 cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 font-medium text-lg text-wht">
        © {currentYear} Mayuresh | All Rights Reserved.
      </p>
    </motion.div>
  );
};

export default FooterMain;
