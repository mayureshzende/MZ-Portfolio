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
    <ul
      className="flex lg:flex-row sm:flex-col gap-6 sm:rounded-4xl text-white font-body lg:relative sm:absolute sm:top-[120%] text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl sm:bg-cyan/30 lg:backdrop-blur-none md:rounded-4xl sm:w-full py-4
      sm:bg-dbrw sm:bg-opacity-25 sm:border-[0.5px] sm:border-ornge md:bg-dbrw md:bg-opacity-25 md:border-[0.5px] md:border-ornge lg:border-0
      "
    >
      {/* sm:backdrop-blur-3xl md:backdrop-blur-3xl */}
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
              className="cursor-pointer text-white hover:text-cyn transition-all duration-500"
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
