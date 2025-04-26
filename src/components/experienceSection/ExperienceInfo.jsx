const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <p className="font-bold text-6xl text-cyn">{number}</p>
      <p className="font-bold text-xl text-wht uppercase -mt-4">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
