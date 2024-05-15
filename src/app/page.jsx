import Project from "./components/project";
import Hero from "./components/hero";
import SocialLinks from "./components/footer";
import Skills from "./components/skills";

export default function Index() {
  return (
    <>
      <Hero />
      <Skills />
      <Project />
      <SocialLinks />
    </>
  );
}
