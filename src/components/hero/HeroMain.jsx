import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="pt-35 pb-16">
      {/* to remove left right pading while finishing */}
      <div className="flex md:flex-row sm:flex-col max-w-[1200px] mx-auto justify-between items-center relative px-4 ">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;
