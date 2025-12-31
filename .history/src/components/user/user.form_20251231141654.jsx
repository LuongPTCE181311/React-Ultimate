import { Button, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/apiservice";

const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickBtn = async () => {
    setIsModalOpen(true);
    // const res = await createUserAPI(fullName, email, password, phoneNumber);
    // if (res.data) {
    //   notification.success({
    //     message: "create user",
    //     description: "tao user thanh cong",
    //   });
    // } else {
    //   notification.error({
    //     message: "create user",
    //     description: JSON.stringify(res.message),
    //   });
    // }
    // console.log("check ress >>>>>>>>>", res.data);
  };
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>FullName</span>
          <Input onChange={(name) => setFullName(name.target.value)} />
        </div>
        <div>
          <span>Email</span>
          <Input onChange={(email) => setEmail(email.target.value)} />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            onChange={(password) => setPassword(password.target.value)}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input onChange={(phone) => setPhoneNumber(phone.target.value)} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3>Table Users</h3>
          <Button type="primary" onClick={() => handleClickBtn()}>
            Create user
          </Button>
        </div>
      </div>
      <Modal
        title="Create User"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        maskClosable={false}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default UserForm;
