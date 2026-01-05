import { Button, Form, Input, Modal, notification, Select } from "antd";
import { useState } from "react";
import { createBookAPI, handleUploadFile } from "../../services/apiservice";
import { InputNumber } from "antd";

const CreateBookUncontrol = (props) => {
  const [form] = Form.useForm();

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { loadBook } = props;
  const handleClickBtn = async (values) => {
    if (!selectedFile) {
      notification.error({
        message: "Error create book",
        description: "Vui long upload anh thumbnail",
      });
      return;
    }
    const resUploadFile = await handleUploadFile(selectedFile, "book");
    if (resUploadFile.data) {
      const newThumbnail = resUploadFile.data.fileUploaded;
      const res = await createBookAPI(
        newThumbnail,
        values.mainText,
        values.author,
        values.price,
        values.quantity,
        values.category
      );
      if (res.data) {
        notification.success({
          message: "create Book",
          description: "tao moi Book thanh cong",
        });
        resetCloseModel();
        await loadBook();
      } else {
        notification.error({
          message: "create book",
          description: JSON.stringify(res.message),
        });
      }
    }
  };

  const resetCloseModel = (values) => {
    setIsModalOpen(false);
    (values.mainText = ""),
      (values.author = ""),
      (values.price = ""),
      (values.quantity = ""),
      (values.category = "");
    setSelectedFile(null);
    setPreview(null);
  };

  const handleOnChangeFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      setPreview(null);
      return;
    }
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
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
        onCancel={() => resetCloseModel()}
        maskClosable={false}
        okText={"Create"}
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
          onFinish={handleClickBtn}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
          style={{ margin: "10px" }}
        >
          <div
            style={{ display: "flex", gap: "10px", flexDirection: "column" }}
          >
            <Form>
              <span>Tieu de</span>
              <Input
                onChange={(mainText) => setMainText(mainText.target.value)}
                value={mainText}
              />
            </Form>
            <div>
              <span>Tac gia</span>
              <Input
                onChange={(author) => setAuthor(author.target.value)}
                value={author}
              />
            </div>
            <div>
              <span>Gia tien</span>
              <InputNumber
                style={{ width: "100%" }}
                addonAfter={"VND"}
                onChange={(price) => setPrice(price)}
                value={price}
              />
            </div>
            <div>
              <span>So luong</span>
              <InputNumber
                style={{ width: "100%" }}
                onChange={(quantity) => setQuantity(quantity)}
                value={quantity}
              />
            </div>
            <div>
              <div>The loai</div>
              <Select
                style={{ width: "100%" }}
                value={category}
                onChange={(value) => {
                  setCategory(value);
                }}
                options={[
                  { value: "Arts", label: "Arts" },
                  { value: "Business", label: "Business" },
                  { value: "Comics", label: "Comics" },

                  { value: "Cooking", label: "Cooking" },
                  { value: "Entertainment", label: "Entertainment" },
                  { value: "History", label: "History" },

                  { value: "Music", label: "Music" },
                  { value: "Sports", label: "Sports" },
                  { value: "Teen", label: "Teen" },
                  { value: "Travel", label: "Travel" },
                ]}
              />
            </div>
            <div>
              <div>Anh Thumbnail</div>
              <div>
                <label
                  htmlFor="btnUpload"
                  style={{
                    display: "block",
                    width: "fit-content",
                    marginTop: "15px",
                    padding: "5px 10px",
                    background: "orange",
                    borderRadius: "5px",
                  }}
                >
                  Upload avatar
                </label>
                <input
                  type="file"
                  hidden
                  id="btnUpload"
                  onChange={(e) => handleOnChangeFile(e)}
                  onClick={(event) => (event.target.value = null)}
                />
                {preview && (
                  <div
                    style={{
                      marginTop: "10px",
                      marginBottom: "15px",
                      height: "100px",
                      width: "150px",
                    }}
                  >
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        objectFit: "contain",
                      }}
                      src={preview}
                      alt=""
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateBookUncontrol;
