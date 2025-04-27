import aboutmesk from "../../assets/images/skills.avif";
const AboutMeImgage = () => {
  return (
    <div className="h-[450px] w-[300px] relative">
      <div className="h-[450px] w-[300px] rounded-[100px] absolute overflow-hidden ">
        <img
          src={aboutmesk}
          alt="About Me Image"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="h-[450px] w-[250px] bg-ornge absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10 "></div>
    </div>
  );
};

export default AboutMeImgage;
