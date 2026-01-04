import { EditOutlined } from "@ant-design/icons";
import { Flex, Space, Table, Tag } from "antd";
const BookTable = (props) => {
  const {current, pageSize, dataBooks} = props
  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{(index + 1) + (current - 1) * pageSize}</>;
      },
    },
    {
      title: "Id",
      dataIndex: "_id",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tieu de",
      dataIndex: "mainText",
      
    },
    {
      title: "Gia tien",
      dataIndex: "price",
      
    },
    {
      title: "So Luong",
      dataIndex: "quantity",
      
    },
    {
      title: "Tac Gia",
      dataIndex: "author",
      
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
        <EditOutlined/>
         <DeleteOutlined />
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
  return <Table columns={columns} dataSource={data} />;
};

export default BookTable;
