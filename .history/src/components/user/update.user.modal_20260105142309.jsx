/* eslint-disable react/prop-types */
import { Input, Modal, notification } from "antd";
import { useEffect, useState } from "react";
import { updateUserAPI } from "../../services/apiservice";

const UpdateUserModal = (props) => {
  const {
    setDataUpdate,
    dataUpdate,
    isModalUpdateOpen,
    setIsModalUpdateOpen,
    loadBook,
  } = props;
  const { id, setId } = useState("");
  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate._id);
      setMainText(dataUpdate.mainText);
      setAuthor(dataUpdate.author);
      setPrice(dataUpdate.price);
      setQuantity(dataUpdate.quantity);
      setCategory(dataUpdate.category);
    }
  }, [dataUpdate]);
  const handleClickBtn = async () => {
    const res = await updateUserAPI(id, fullName, phoneNumber);
    if (res.data) {
      notification.success({
        message: "Update user",
        description: "cap nhat user thanh cong",
      });
      resetCloseModel();
      await loadUser();
    } else {
      notification.error({
        message: "Update user",
        description: JSON.stringify(res.message),
      });
    }
  };

  const resetCloseModel = () => {
    setIsModalUpdateOpen(false);
    setFullName("");
    setPhoneNumber("");
    setId("");
    setDataUpdate(null);
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
