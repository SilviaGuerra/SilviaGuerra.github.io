import React from "react";
import { Button, Col, Row } from "antd";
// import Header from "../Header";
import TitleSection from "./TitleSection";
import Github from "../assets/img/github(1).svg";
import LinkedIn from "../assets/img/linkedin-cafe.svg";
import Robot from "../assets/img/robot.svg";
import Datalab1 from "../assets/img/Datalab.png";
import Datalab2 from "../assets/img/Datalab-2.png";
import Anay1 from "../assets/img/Anay-1.jpg";
import Anay2 from "../assets/img/Anay-2.jpg";
import Anay3 from "../assets/img/Anay-3.jpg";
import Davivienda1 from "../assets/img/Davivienda1.png";
import Davivienda2 from "../assets/img/Davivienda2.png";
import Cityparking from "../assets/img/Cityparking.png";
import SilviaG from "../assets/img/SilviaG.jpg";
import Codear from "../assets/img/sai-kiran-anagani.jpg";
import Cantar from "../assets/img/coro.jpg";
import Escribir from "../assets/img/aaron-burden.jpg";
import Leer from "../assets/img/aliis-sinisalu.jpg";

import Star from "../assets/img/star.svg";
import Puzzle from "../assets/img/puzzle-piece.svg";
import Window from "../assets/img/window.svg";
import Rocket from "../assets/img/toy-rocket.svg";
import AboutMe from "../assets/img/sobremi.svg";
import Contact from "../assets/img/contacto-rosa.svg";
import Mail from "../assets/img/mail.svg";

import "./styles.scss";
import CardProject from "./CardsProjects";

const Body = () => {
  return (
    <>
      {/* <Header /> */}
      <section className="body-foldImage">
        <h1 className="">Silvia Guerra</h1>
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
      <TitleSection
        img={Robot}
        alt="Robot"
        titleSection="Proyectos"
        id="proyectos"
      />
      <Row className="projects-container">
        <Col sm={24} md={6}>
          <CardProject
            alt="Data lab imágenes"
            img={[Datalab1, Datalab2]}
            titleCard="Data Lab"
            descriptionCard="Es un freelance que realicé en 8 días, consiste en un sitio web de la empresa para describir lo que hacen"
            link="https://www.datalabmx.com/"
          />
        </Col>
        <Col sm={24} md={6}>
          <CardProject
            alt="Anay imágenes"
            img={[Anay1, Anay2, Anay3]}
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
              img={[Davivienda1, Davivienda2]}
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
              alt="Cityparking formulario imagen muestra"
              img={[Cityparking]}
              titleCard="CityParking"
              descriptionCard="Sitio para el pago de servicio de servicios urbanos en Colombia https://city-parking.com/"
            />
          </a>
        </Col>
      </Row>

      {/** Conocimientos **/}
      <TitleSection
        img={Star}
        alt="Star"
        titleSection="Conocimientos"
        id="conocimientos"
      />
      <Row className="projects-container">
        <Col sm={24} md={8}>
          <img src={Window} alt="Creación de páginas" width={"30%"} />
          <p className="textmedium services-description">
            Creación de páginas web responsive y uso de frameworks
          </p>
        </Col>
        <Col sm={24} md={8}>
          <img src={Puzzle} alt="Consumo API" width={"30%"} />
          <p className="textmedium services-description">
            Consumo de API para mostrar información
          </p>
        </Col>
        <Col sm={24} md={8}>
          <img src={Rocket} alt="Herramientas para páginas web" width={"30%"} />
          <p className="textmedium services-description">
            JavaScript, React, Redux, Typescript para páginas web
          </p>
        </Col>
      </Row>

      {/** Sobre mi **/}
      <TitleSection
        img={AboutMe}
        alt="About me"
        titleSection="Sobre mi"
        id="sobreMi"
      />
      <Row className="projects-container">
        <Col sm={24} md={12}>
          <img src={SilviaG} alt="Foto Silvia Guerra" className="aboutMe-img" />
        </Col>
        <Col sm={24} md={12}>
          <p className="textmedium aboutMe-presentation">
            Me llamo Silvia, soy un apasionada frontend developer con amplia
            experiencia en el desarrollo de aplicaciones web utilizando
            tecnologías como HTML, CSS y JavaScript.
          </p>
          <p className="textmedium aboutMe-presentation">
            Mi especialización se centra en la utilización del framework React
            para crear interfaces de usuario atractivas y dinámicas.
          </p>
          <p className="textmedium aboutMe-presentation">
            Suelo ser un poco dispersa y curiosa pero también una apasionada por
            el aprendizaje constante y siempre estoy buscando maneras de mejorar
            mis habilidades técnicas.
          </p>
        </Col>
      </Row>
      <Row className="aboutMe-subtitle">
        <h3>Me gusta:</h3>
      </Row>
      <Row>
        <Col sm={24} md={12}>
          <a
            href="https://github.com/SilviaGuerra/"
            target="_blank"
            rel="nooppener noreferrer"
          >
            <CardProject
              alt="Codear"
              img={[Codear]}
              titleCard="Codear"
              descriptionCard="Me encanta hacer código porque es lo más cercano a tener poderes, porque todo lo que imagino lo puedo convertir en realidad."
            />
          </a>
        </Col>
        <Col sm={24} md={12}>
          <a
            href="https://www.youtube.com/channel/UCkgO9w5Aqh8eQv-AT23L8Ww"
            target="_blank"
            rel="nooppener noreferrer"
          >
            <CardProject
              alt="Cantar"
              img={[Cantar]}
              titleCard="Cantar"
              descriptionCard="Formo parte del coro Ars Iovialis de la Facultad de Ingeniería (UNAM) desde el 2013. 
              Nos hemos presentado en la sala Nezahuacóyotl, el Auditorio Nacional
              y Bellas Artes con la Orquesta Sinfónica de Minería interpretando obras como Carmina Burana,
              la 9a sinfonía de Beethoven, Stabat Mater de Dvorak, entre otras."
            />
          </a>
        </Col>
      </Row>
      <Row>
        <Col sm={24} md={12}>
          <a
            href="https://voyadefraudar.blogspot.com/"
            target="_blank"
            rel="nooppener noreferrer"
          >
            <CardProject
              alt="Escibir"
              img={[Escribir]}
              titleCard="Escribir"
              descriptionCard="Escribo como un pasatiempo para tener una manera de desahogarme."
            />
          </a>
        </Col>
        <Col sm={24} md={12}>
          <CardProject
            alt="Leer"
            img={[Leer]}
            titleCard="Leer"
            descriptionCard="Amo leer porque es la forma más fácil de escapar de la realidad.
            Mi libro favorito (por ahora) es: la elegancia del erizo - Mariel Barbery"
          />
        </Col>
      </Row>

      {/** Contacto **/}
      <TitleSection
        img={Contact}
        alt="Contact"
        titleSection="Contacto"
        id="contacto"
      />
      <section className="contact-container">
        <Row>
          <Col sm={24} md={12} className="contact-col">
            <img src={Mail} alt="mail" width="20" />
            <span className="contact-mail">silvia.guerrahdz@gmail.com</span>
          </Col>
          <Col sm={24} md={12}>
            <p>
              <a
                href="https://github.com/SilviaGuerra/"
                target="_blank"
                rel="noreferrer"
              >
                GitHib
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/silvia-guerra-65249a130/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Body;
