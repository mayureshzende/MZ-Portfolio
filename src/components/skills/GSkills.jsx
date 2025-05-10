import SkillsSphere from "./SkillsSphere";

const GSkills = () => {
  return (
    <>
      <section className="w-full flex justify-center px-4 py-10" id="skills">
        <div className="flex flex-col w-full max-w-7xl items-center justify-start">
          <div className="relative w-full flex items-center justify-center">
            <div className="absolute w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#88e5f0]/35 blur-3xl" />
            <SkillsSphere />
          </div>
        </div>
      </section>
    </>
  );
};

export default GSkills;
