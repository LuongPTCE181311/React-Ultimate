import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AliwangwangOutlined,
  BookOutlined,
  HomeOutlined,
  LoginOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useContext, useState } from "react";
import { AuthContext } from "../context/auth.context";

const Header = () => {
  const [current, setCurrent] = useState("");
  const { user } = useContext(AuthContext);
  console.log("check user >>>>>", user);

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: "home",
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/users"}>Users</Link>,
      key: "users",
      icon: <UserOutlined />,
    },
    {
      label: <Link to={"/books"}>Books</Link>,
      key: "books",
      icon: <BookOutlined />,
    },

    ...(!user.id
      ? [
          {
            label: <Link to={"/login"}>Dang nhap</Link>,
            key: "login",
            icon: <LoginOutlined />,
          },
        ]
      : []),
    ...(user.id
      ? [
          {
            label: `Welcome ${user.fullName}`,
            key: "setting",
            icon: <AliwangwangOutlined />,
            children: [{ 
              label: <span onClick={}>Dang xuat</span>,
               key: "logout" 
              }],
          },
        ]
      : []),
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
