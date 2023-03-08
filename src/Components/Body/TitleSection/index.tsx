import React from "react";
import "./styles.scss";

interface TitleSectionProps {
  img: string;
  alt: string;
  titleSection: string;
}

const TitleSection = (props: TitleSectionProps) => {
  return (
    <>
      <section>
        <hr />
        <img src={props.img} alt={props.alt} className="titleSection-img" />
        <h1 className="titleSection-mainTitle">{props.titleSection}</h1>
        <hr />
      </section>
    </>
  );
};

export default TitleSection;
