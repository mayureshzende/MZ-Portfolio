import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="pt-20 pb-14">
      {/* to remove left right pading while finishing */}
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative pr-10 pl-5 ">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
