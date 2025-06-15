import "./App.css";
import Fold from "./components/fold";
import TitleSection from "./components/titleSection";
import Robot from "../src/assets/img/robot.svg";
// import CardProject from "./components/cardProject";
import Projects from "./components/projects";
import Star from "../src/assets/img/star.svg";
import AboutMeImg from "../src/assets/img/sobremi.svg";
import ContactFly from "../src/assets/img/contacto-rosa.svg";
import Contact from "./components/contact";
import Knowledges from "./components/knowledges";
import AboutMe from "./components/aboutme";

function App() {
  return (
    <>
      <Fold />
      <TitleSection
        img={Robot}
        alt="Robot"
        titleSection="Proyectos"
        id="proyectos"
      />
      <Projects />
      <TitleSection
        img={Star}
        alt="star"
        titleSection="Conocimientos"
        id="conocimientos"
      />
      <Knowledges />
      <TitleSection
        img={AboutMeImg}
        alt="sobre mi"
        titleSection="Sobre mi"
        id="sobre mi"
      />
      <AboutMe />
      <TitleSection
        img={ContactFly}
        alt="contacto"
        titleSection="Contacto"
        id="contacto"
      />
      <Contact />
    </>
  );
}

export default App;
