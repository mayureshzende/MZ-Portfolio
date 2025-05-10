import { Link } from "react-scroll";

const Links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const Navlinks = () => {
  return (
    <ul className="flex lg:flex-row sm:flex-col gap-6 sm:rounded-4xl text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 lg:backdrop-blur-none md:backdrop-blur-3xl md:rounded-4xl sm:backdrop-blur-3xl sm:[filter: blur(200px);transform: translate3d(0, 0, 0);] md:[filter: blur(200px);transform: translate3d(0, 0, 0);] sm:w-full py-4 ">
      {/* lg:bg-blck  */}
      {Links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyn transition-all duration-500 "
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-dCyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default Navlinks;
