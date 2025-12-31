import { NavLink } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useState } from "react";

const Header = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: "Home",
      key: "home",
      icon: <MailOutlined />,
    },
    {
      label: "Users",
      key: "users",
      icon: <AppstoreOutlined />,
    },
    {
      label: "Products",
      key: "SubMenu",
      icon: <SettingOutlined />,
    },
    {
      key: "alipay",
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
    },
  ];
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );
};

export default Header;
