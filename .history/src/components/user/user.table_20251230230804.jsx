import { Flex, Space, Table, Tag } from "antd";
import { fetchAllUserAPI } from "../../services/apiservice";
import { useState } from "react";

const Usertable = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const columns = [
    {
      title: "Name",
      dataIndex: "name",

      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
    },
  ];
  // const data = [
  //   {
  //     key: "1",
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     tags: ["nice", "developer"],
  //   },
  //   {
  //     key: "2",
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     tags: ["loser"],
  //   },
  //   {
  //     key: "3",
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //     tags: ["cool", "teacher"],
  //   },
  // ];
  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    console.log("run loader : ", res);
  };

  loadUser();
  return <Table columns={columns} dataSource={dataUsers} />;
};

export default Usertable;
