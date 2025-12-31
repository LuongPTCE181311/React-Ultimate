import { Button, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/apiservice";

const UpdateUserModal = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Modal
        title="Create User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={() => handleClickBtn()}
        onCancel={() => resetCloseModel()}
        maskClosable={false}
        okText={"Create"}
      >
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <div>
            <span>FullName</span>
            <Input
              onChange={(name) => setFullName(name.target.value)}
              value={fullName}
            />
          </div>
          <div>
            <span>Email</span>
            <Input
              onChange={(email) => setEmail(email.target.value)}
              value={email}
            />
          </div>
          <div>
            <span>Password</span>
            <Input.Password
              onChange={(password) => setPassword(password.target.value)}
              value={password}
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
