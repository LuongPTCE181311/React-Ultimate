/* eslint-disable react/prop-types */
import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { createUserAPI } from "../../services/apiservice";

const UpdateUserModal = (props) => {
  const [fullName, setFullName] = useState("");
  const [id, setId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } =
    props;

  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate._id);
      setFullName(dataUpdate.fullName);
      setPhoneNumber(dataUpdate.phone);
    }
  }, []);
  const handleClickBtn = async () => {
    const res = await createUserAPI(fullName, email, password, phoneNumber);
    if (res.data) {
      notification.success({
        message: "create user",
        description: "tao user thanh cong",
      });
      resetCloseModel();
      //   await loadUser();
    } else {
      notification.error({
        message: "create user",
        description: JSON.stringify(res.message),
      });
    }
    console.log("check ress >>>>>>>>>", res.data);
  };

  const resetCloseModel = () => {
    setIsModalUpdateOpen(false);
    setFullName("");
    setPhoneNumber("");
    setId("");
  };
  return (
    <Modal
      title="Upadte a User"
      closable={{ "aria-label": "Custom Close Button" }}
      open={isModalUpdateOpen}
      onOk={() => handleClickBtn()}
      onCancel={() => resetCloseModel()}
      maskClosable={false}
      okText={"Save"}
    >
      <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
        <div>
          <span>Id</span>
          <Input value={id} disabled />
        </div>
        <div>
          <span>FullName</span>
          <Input
            onChange={(name) => setFullName(name.target.value)}
            value={fullName}
          />
        </div>
        
        <div>
          <span>Phone number</span>
          <Input
            onChange={(phone) => setPhoneNumber(phone.target.value)}
            value={phoneNumber}
          />
        </div>
      </div>
    </Modal>
  );
};

export default UpdateUserModal;
