import React from "react";
import { Card } from "antd";

import "./styles.scss";

const { Meta } = Card;

interface CardProjectProps {
  alt: string;
  descriptionCard: string;
  img: string;
  titleCard: string;
}

const CardProject = (props: CardProjectProps) => {
  return (
    <>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={props.alt} src={props.img} />}
      >
        <Meta title={props.titleCard} description={props.descriptionCard} />
      </Card>
    </>
  );
};

export default CardProject;
