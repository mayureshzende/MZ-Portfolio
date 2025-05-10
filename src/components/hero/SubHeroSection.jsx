const SubHeroSection = () => {
  return (
    <div className="w-full max-w-[full] border-y bg-brw border-lGrey text-lGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-2xl py-8 md:flex-row sm:flex items-center gap-4">
      <p className="md:block sm:hidden">Quick Learner</p>
      <p className="md:block">Team Player</p>
      <p className="md:block">Leadership</p>
      <p className="md:block sm:hidden">Attention to Detail</p>
    </div>
  );
};

export default SubHeroSection;
