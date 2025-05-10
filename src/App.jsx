import AboutMeMain from "./components/aboutme/AboutMeMain";
import HeroGradient from "./components/hero/HeroGradient";
import HeroMain from "./components/hero/HeroMain";
import SubHeroSection from "./components/hero/SubHeroSection";
import NavbarMain from "./components/navbar/NavbarMain";
import SkillsMain from "./components/skills/SkillsMain";
// import SubSkills from "./components/skills/SubSkills";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
import RandomBlurCircles from "./RandomBlurCircles";
import ExperienceExp from "./components/experienceSection/ExperienceExp";
import CursorGlow from "./components/CursorGlow";
// import GSkills from "./components/skills/GSkills";
// import GradientCard from "./components/GradientCard";
// import SkillsSection from "./components/skills/SkillsSection";
// import ExperienceMain from "./components/experienceSection/ExperienceMain";
// import AnimateBackground from "./components/AnimateBackground";
// import BlurredAnimatedBackground from "./BlurredAnimatedBackground";
// import Gradients from "./components/hero/Gradients";
function App() {
  return (
    <main className="font-montserrat">
      <RandomBlurCircles />
      <NavbarMain />
      <HeroMain />
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      {/* <GSkills /> */}
      {/* <SubSkills /> */}
      {/* <ExperienceMain /> */}
      <ExperienceExp />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
      <CursorGlow />
      {/* <HelperSection /> */}
    </main>
  );
}

export default App;
