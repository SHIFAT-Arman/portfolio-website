import Project from "./components/Project";
// import Hero from "./components/__hero";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import SocialLinks from "./components/Footer";
import Skills from "./components/Skills";

export default function Index() {
  return (
    <>
      <Hero />
      <Skills />
      <Experience />
      <Project />
      {/* <DrawerDemo /> */}
      <SocialLinks />
    </>
  );
}
