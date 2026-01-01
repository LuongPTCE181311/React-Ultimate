import { Button, Input } from "antd";
const RegisterPage = () => {
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
          <Input />
        </div>
        <div>
          <span>Email</span>
          <Input />
        </div>
        <div>
          <span>Password</span>
          <Input.Password />
        </div>
        <div>
          <span>Phone number</span>
          <Input />
        </div><

      </div>
    </Modal>
  );
};

export default RegisterPage;
