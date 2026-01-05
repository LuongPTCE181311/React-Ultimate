import { Button, Input, Modal } from "antd";

const BookModal = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="user-form" style={{ margin: "10px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Table Users</h2>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Create user
          </Button>
        </div>
      </div>
      <Modal
        title="Create Book"
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
    </div>
  );
};

export default BookModal;
