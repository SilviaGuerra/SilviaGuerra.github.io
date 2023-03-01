import React from "react";
import { Menu } from "antd";

const Header = () => {
  return (
    <>
      <div className="logo" />
      <Menu
        // theme="dark"
        // className="header-"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        items={new Array(15).fill(null).map((_, index) => {
          const key = index + 1;
          return {
            key,
            label: `nav ${key}`,
          };
        })}
      />
    </>
  );
};

export default Header;
