import { LuArrowDownRight } from "react-icons/lu";
// import cv from "../../assets/mz-cv-wm-pf.pdf";
import cv from "../../assets/Portfolio_dubai_experience_resume_december_2025.pdf";
const Navbutton = () => {
  return (
    <a href={cv} download={"mayuresh-zende-fullStack-aws"}>
      <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-dCyan border gap-1 flex items-center justify-center bg-gradient-to-r from-dCyan to-ornge hover:border-ornge hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
        Resume
        <div className="sm:hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>
    </a>
  );
};

export default Navbutton;
