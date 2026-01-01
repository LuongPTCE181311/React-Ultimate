/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, notification, Popconfirm, Table } from "antd";
import UpdateUserModal from "./update.user.modal";
import { useState } from "react";
import DetailUserDrawer from "./detail.user.drawer";
import { deleteUserAPT } from "../../services/apiservice";

const Usertable = (props) => {
  const { dataUsers, loadUser } = props;
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [openDrawerDeatilUser, setOpenDrawerDeatilUser] = useState(false);
  const [dataUserDetail, setDataUserDetail] = useState(null);

  const handleDeleteUser = async (id) => {
    const res = await deleteUserAPT(id);
    if (res.data) {
      notification.success({
        message: "delete user",
        description: "Xoa user thanh cong",
      });
      await loadUser();
    } else {
      notification.error({
        message: "delete user",
        description: "Xoa user that bai",
      });
    }
  };
  const columns = [
    {
      title: "STT",
      render: (_, record) => {
        return (
          <a
            href="#"
            onClick={() => {
              setOpenDrawerDeatilUser(true);
              setDataUserDetail(record);
            }}
          >
            {record._id}
          </a>
        );
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
              setOpenDrawerDeatilUser(true);
              setDataUserDetail(record);
            }}
          >
            {record._id}
          </a>
        );
      },
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
        <div style={{ display: "flex", gap: "20px" }}>
          <EditOutlined
            style={{ cursor: "pointer", color: "orange" }}
            onClick={() => {
              setIsModalUpdateOpen(true);
              setDataUpdate(record);
            }}
          />

          <Popconfirm
            title="Xoa nguoi dung"
            description="ban co chac nhan muon xoa user nay?"
            onConfirm={() => handleDeleteUser(record._id)}
            okText="Yes"
            cancelText="No"
            placement="left"
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
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

  console.log("render  111");
  return (
    <>
      <Table columns={columns} dataSource={dataUsers} rowKey={"_id"} />
      <UpdateUserModal
        isModalUpdateOpen={isModalUpdateOpen}
        setIsModalUpdateOpen={setIsModalUpdateOpen}
        dataUpdate={dataUpdate}
        setDataUpdate={setDataUpdate}
        loadUser={loadUser}
      />
      <DetailUserDrawer
        openDrawerDeatilUser={openDrawerDeatilUser}
        setOpenDrawerDeatilUser={setOpenDrawerDeatilUser}
        dataUserDetail={dataUserDetail}
        setDataUserDetail={setDataUserDetail}
        loadUser={loadUser}
      />
    </>
  );
};

export default Usertable;
