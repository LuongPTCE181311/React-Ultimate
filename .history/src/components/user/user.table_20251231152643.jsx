/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";

const Usertable = (props) => {
  const { dataUsers } = props;
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <a href="#">{record._id}</a>
        )
      }
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <EditOutlined style={{display}}/>
          <DeleteOutlined />
        </>
      ),
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

  console.log("render  111");
  return <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />;
};

export default Usertable;
