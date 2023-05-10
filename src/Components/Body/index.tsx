import React from "react";
import { Button, Col, Row } from "antd";

import TitleSection from "./TitleSection";
// import pdf from "../assets/SilviaGuerra-es-en.pdf";
import Github from "../assets/img/github(1).svg";
import LinkedIn from "../assets/img/linkedin-cafe.svg";
import Robot from "../assets/img/robot.svg";
import Project1 from "../assets/img/Datalab.png";
import Project2 from "../assets/img/Datalab.png";
import Star from "../assets/img/star.svg";
import Puzzle from "../assets/img/puzzle-piece.svg";
import Window from "../assets/img/window.svg";
import Rocket from "../assets/img/toy-rocket.svg";
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
        <Button type="primary">
          <a
            href="../assets/SilviaGuerra-Front.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="SilviaGuerra-Front.pdf"
          >
            Descarga CV
          </a>
        </Button>
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
      <Row className="projects-container">
        <Col sm={24} md={6}>
          <CardProject
            alt="Data lab imágenes"
            img={[Project1, Project2]}
            titleCard="Data Lab"
            descriptionCard="Es un freelance que realicé en 8 días, consiste en un sitio web de la empresa para describir lo que hacen"
            link="https://www.datalabmx.com/"
          />
        </Col>
        <Col sm={24} md={6}>
          <CardProject
            alt="Anay imágenes"
            img={[Project1, Project2]}
            titleCard="Anay"
            descriptionCard="Herramienta interna de Yana que se usa para crear y simular una conversación del bot. Importar y exportar las conversaciones creadas"
          />
        </Col>
        <Col sm={24} md={6}>
          <a
            href="https://portalpagos.davivienda.com/#/"
            target="_blank"
            rel="nooppener noreferrer"
          >
            <CardProject
              alt="Davivienda"
              img={[Project1, Project2]}
              titleCard="Davivienda"
              descriptionCard="Portal para pagos que ayuda al banco Davivienda (Colombia)"
            />
          </a>
        </Col>
        <Col sm={24} md={6}>
          <a
            href="https://cityparking.paymentez.com/"
            target="_blank"
            rel="nooppener noreferrer"
          >
            <CardProject
              alt=""
              img={[Project1, Project2]}
              titleCard="CityParking"
              descriptionCard="Sitio para el pago de servicio de servicios urbanos en Colombia https://city-parking.com/"
            />
          </a>
        </Col>
      </Row>

      {/** Conocimientos **/}
      <TitleSection img={Star} alt="Star" titleSection="Conocimientos" />
      <Row className="projects-container">
        <Col sm={24} md={8}>
          <img src={Window} alt="Creación de páginas" width={"30%"} />
          <p>Creación de páginas web responsive y uso de frameworks</p>
        </Col>
        <Col sm={24} md={8}>
          <img src={Puzzle} alt="Consumo API" width={"30%"} />
          <p>Consumo de API para mostrar información</p>
        </Col>
        <Col sm={24} md={8}>
          <img src={Rocket} alt="Herramientas para páginas web" width={"30%"} />
          <p>JavaScript, React, Redux, Typescript para páginas web</p>
        </Col>
      </Row>

      {/** Sobre mi **/}
      <TitleSection img={AboutMe} alt="About me" titleSection="Sobre mi" />
      {/** Contacto **/}
      <TitleSection img={Contact} alt="Contact" titleSection="Contacto" />
    </>
  );
};

export default Body;
