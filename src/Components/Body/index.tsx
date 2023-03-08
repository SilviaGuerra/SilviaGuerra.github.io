import React from "react";
import { Button, Col, Row } from "antd";

import TitleSection from "./TitleSection";
import Github from "../assets/img/github(1).svg";
import LinkedIn from "../assets/img/linkedin-cafe.svg";
import Robot from "../assets/img/robot.svg";
import Project1 from "../assets/img/sobremi.svg";
import Star from "../assets/img/star.svg";
import AboutMe from "../assets/img/sobremi.svg";
import Contact from "../assets/img/contacto-rosa.svg";

import "./styles.scss";
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
      <Row>
        <Col sm={24} md={8}>
          <CardProject
            alt="project1"
            img={Project1}
            titleCard="Data Lab"
            descriptionCard="Freelance"
          />
        </Col>
        <Col sm={24} md={8}>
          <CardProject
            alt=""
            img={Project1}
            titleCard="Anay"
            descriptionCard="Herramienta interna de Yana"
          />
        </Col>
        <Col sm={24} md={8}>
          <CardProject
            alt=""
            img={Project1}
            titleCard="Davivienda"
            descriptionCard="Sitio para pagos"
          />
        </Col>
      </Row>

      {/** Conocimientos **/}
      <TitleSection img={Star} alt="Star" titleSection="Conocimientos" />
      {/** Sobre mi **/}
      <TitleSection img={AboutMe} alt="About me" titleSection="Sobre mi" />
      {/** Contacto **/}
      <TitleSection img={Contact} alt="Contact" titleSection="Contacto" />
    </>
  );
};

export default Body;
