import React from "react";
import { Card, Carousel } from "antd";

import "./styles.scss";

const { Meta } = Card;

interface CardProjectProps {
  alt: string;
  descriptionCard: string;
  img: Array<string>;
  titleCard: string;
  link?: string;
}

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#fff",
};

const imgCarousel = (props: any) => {
  return (
    <Carousel autoplay>
      {props.img.map((element: string) => {
        return (
          <div>
            <h3 style={contentStyle}>
              <img
                style={contentStyle}
                alt={props.alt}
                src={element}
                width={"100%"}
              />
            </h3>
          </div>
        );
      })}
    </Carousel>
  );
};

const CardProject = (props: CardProjectProps) => {
  return (
    <section className="cardProject-container">
      <Card hoverable style={{ width: "72%" }} cover={imgCarousel(props)}>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <Meta
            title={props.titleCard}
            description={props.descriptionCard}
            className="cardProject-description"
          />
        </a>
      </Card>
    </section>
  );
};

export default CardProject;
