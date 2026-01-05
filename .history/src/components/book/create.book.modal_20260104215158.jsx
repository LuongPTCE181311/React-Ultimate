import { Button, Input, Modal } from "antd";
import { useState } from "react";
import { createBookAPI } from "../../services/apiservice";

const BookModal = () => {
  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClickBtn = async () => {
    const res = await createBookAPI(
      thumbnail,
      mainText,
      author,
      price,
      quantity,
      category
    );
    if (res.data) {
      notification.success({
        message: "create Book",
        description: "tao user thanh cong",
      });
      resetCloseModel();
      await loadUser();
    } else {
      notification.error({
        message: "create user",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
    <div className="user-form" style={{ margin: "10px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>Table Book</h2>
          <Button type="primary" onClick={() => setIsModalOpen(true)}>
            Create Book
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
