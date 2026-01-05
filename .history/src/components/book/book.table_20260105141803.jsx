import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Table } from "antd";
import DetailBook from "./book.detail";
import { useState } from "react";
import UpdateBookModalControled from "./update.book.controled";
const BookTable = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    // eslint-disable-next-line react/prop-types
    current,
    pageSize,
    dataBooks,
    total,
    setCurrent,
    setPageSize,
    loadBook,
  } = props;
  const [openDrawerDetailBook, setOpenDrawerDetailBook] = useState(false);
  const [dataBookDetail, setDataBookDetail] = useState(null);
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const onChange = (pagination, filters, sorter, extra) => {
    if (pagination && pagination.current) {
      if (+pagination.current !== +current) {
        setCurrent(+pagination.current);
      }
    }

    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize !== +pageSize) {
        setPageSize(+pagination.pageSize);
      }
    }
  };
  const columns = [
    {
      title: "STT",
      render: (_, record, index) => {
        return <>{index + 1 + (current - 1) * pageSize}</>;
      },
    },
    {
      title: "Id",
      dataIndex: "_id",
      render: (_, record) => {
        return (
          <a
            href="#"
            onClick={() => {
              setOpenDrawerDetailBook(true);
              setDataBookDetail(record);
            }}
          >
            {record._id}
          </a>
        );
      },
    },
    {
      title: "Tieu de",
      dataIndex: "mainText",
    },
    {
      title: "Gia tien",
      dataIndex: "price",
      render: (text) => {
        if (text)
          return new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(text);
      },
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
      // eslint-disable-next-line no-unused-vars
      render: (_, record) => (
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            style={{ cursor: "pointer", color: "orange" }}
            onClick={() => {
              setIsModalUpdateOpen(true);
              setDataUpdate(record);
            }}
          />
          <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
        </div>
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
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataBooks}
        rowKey={"_id"}
        pagination={{
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => {
            return (
              <div>
                {" "}
                {range[0]}-{range[1]} trên {total} rows
              </div>
            );
          },
        }}
        onChange={onChange}
      />
      <DetailBook
        setOpenDrawerDetailBook={setOpenDrawerDetailBook}
        openDrawerDetailBook={openDrawerDetailBook}
        setDataBookDetail={setDataBookDetail}
        dataBookDetail={dataBookDetail}
        loadBook={loadBook}
      />
      <UpdateBookModalControled
        setDataUpdate={setDataUpdate}
        dataUpdate={dataUpdate}
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        loadBook={loadBook}
      />
    </>
  );
};

export default BookTable;
