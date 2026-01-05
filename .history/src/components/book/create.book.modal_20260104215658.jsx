import { Button, Input, Modal, notification } from "antd";
import { useState } from "react";
import { createBookAPI } from "../../services/apiservice";

const BookModal = (props) => {
  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { loadBook } = props;
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
        description: "tao Book thanh cong",
      });
      resetCloseModel();
      await loadBook();
    } else {
      notification.error({
        message: "create user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetCloseModel = () => {
    setIsModalOpen(false);
    setMainText("");
    setAuthor("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setThumbnail("");
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
            <span>Tieu de</span>
            <Input
              onChange={(mainText) => setMainText(mainText.target.value)}
              value={mainText}
            />
          </div>
          <div>
            <span>Tac gia</span>
            <Input
              onChange={(author) => setAuthor(author.target.value)}
              value={author}
            />
          </div>
          <div>
            <span>Gia tien</span>
            <Input
              onChange={(price) => setPrice(price.target.value)}
              value={price}
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
