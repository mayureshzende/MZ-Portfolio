import AboutMeMain from "./components/aboutme/AboutMeMain";
import HelperSection from "./components/HelperSection";
import Gradients from "./components/hero/Gradients";
import HeroGradient from "./components/hero/HeroGradient";
import HeroMain from "./components/hero/HeroMain";
import HeroMainGradientMouseMove from "./components/hero/HeroMainGradientMouseMove";
import SubHeroSection from "./components/hero/SubHeroSection";
import NavbarMain from "./components/navbar/NavbarMain";
import SkillsMain from "./components/skills/SkillsMain";
import SubSkills from "./components/skills/SubSkills";
import ExperienceMain from "./components/experienceSection/ExperienceMain";
import ProjectsMain from "./components/projectsSection/ProjectsMain";
import ContactMeMain from "./components/contactMeSection/ContactMeMain";
import FooterMain from "./components/footer/FooterMain";
function App() {
  return (
    <main className="font-montserrat">
      <NavbarMain />
      <HeroMain />
      {/* <HeroMainGradientMouseMove /> */}
      <HeroGradient />
      <SubHeroSection />
      <AboutMeMain />
      <SkillsMain />
      <SubSkills />
      <ExperienceMain />
      <ProjectsMain />
      <ContactMeMain />
      <FooterMain />
      {/* <HelperSection /> */}
      {/* <Gradients /> */}
    </main>
  );
}

export default App;
