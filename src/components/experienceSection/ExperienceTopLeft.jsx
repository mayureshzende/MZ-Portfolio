import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-ornge font-bold uppercase text-3xl font-montserrat text-center">
        Since 2019
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number="3" text="Years" />
        <p className="font-bold text-6xl text-wht">-</p>
        <ExperienceInfo number="23" text="Websites" />
      </div>
      <p className="text-center text-wht">
        With 3 years of experience building dynamic and user-friendly web
        applications.
      </p>
      <ExperienceInfo number="$100k" text="Max Budget" />
    </div>
  );
};

export default ExperienceTopLeft;
