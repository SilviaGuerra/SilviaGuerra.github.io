import React from "react";
import { Button } from "antd";

import TitleSection from "./TitleSection";
import Github from "../assets/img/github(1).svg";
import LinkedIn from "../assets/img/linkedin-cafe.svg";
import Robot from "../assets/img/robot.svg";
import "./index.scss";
import CardProject from "./CardsProjects";

const Body = () => {
  return (
    <>
      <section className="body-foldImage">
        <h1>Silvia Guerra</h1>
        <h5>Desarrolladora Front-End</h5>
        <Button type="primary">Descarga CV</Button>
        <div>
          <a
            href="https://github.com/SilviaGuerra/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Github} alt="Github" className="fold-link" />
          </a>
          <a
            href="https://www.linkedin.com/in/silvia-guerra-65249a130/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" className="fold-link" />
          </a>
        </div>
      </section>

      {/** Proyectos **/}
      <TitleSection img={Robot} alt="Robot" titleSection="Proyectos" />
      <CardProject />
    </>
  );
};

export default Body;
