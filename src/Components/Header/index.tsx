import React, { useState } from "react";
import {
  HomeTwoTone,
  ToolTwoTone,
  BulbTwoTone,
  SmileTwoTone,
  RocketTwoTone,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

import "./index.css";

const HeaderComponent = () => {
  // const prueba = useRef(null);
  const items: MenuProps["items"] = [
    {
      // label: "",
      key: "home",
      icon: <HomeTwoTone twoToneColor="#eb2f96" />,
    },
    {
      label: "Proyectos",
      // label: <a href="#proyectos">Proyectos</a>,
      key: "projects",
      icon: <ToolTwoTone twoToneColor="#eb2f96" />,
    },
    {
      label: "Conocimientos",
      key: "knowledges",
      icon: <BulbTwoTone twoToneColor="#eb2f96" />,
    },
    {
      label: "Sobre mi",
      key: "aboutme",
      icon: <SmileTwoTone twoToneColor="#eb2f96" />,
    },
    {
      label: "Contacto",
      key: "contact",
      icon: <RocketTwoTone twoToneColor="#eb2f96" />,
    },
  ];

  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
    console.log(e, "Holaa");
  };

  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
        style={{ background: "red" }}
      />
    </>
  );
};

export default HeaderComponent;
