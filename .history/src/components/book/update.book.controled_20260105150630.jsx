/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Input, Modal, notification, Select } from "antd";
import { useEffect, useState } from "react";
import { handleUploadFile } from "../../services/apiservice";
import { InputNumber } from "antd";

const UpdateBookModalControled = (props) => {
  const {
    setDataUpdate,
    dataUpdate,
    isModalUpdateOpen,
    setIsModalUpdateOpen,
    loadBook,
  } = props;
  const [id, setId] = useState("");
  const [mainText, setMainText] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  useEffect(() => {
    if (dataUpdate) {
      setId(dataUpdate._id);
      setMainText(dataUpdate.mainText);
      setAuthor(dataUpdate.author);
      setPrice(dataUpdate.price);
      setQuantity(dataUpdate.quantity);
      setCategory(dataUpdate.category);
      setPreview(
        `${import.meta.env.VITE_BACKEND_URL}/images/book/${
          dataUpdate.thumbnail
        }`
      );
    }
  }, [dataUpdate]);
  // eslint-disable-next-line react/prop-types
  const handleClickBtn = async () => {
    if (!selectedFile && !preview) {
      notification.error({
        message: "Error create book",
        description: "Vui long upload anh thumbnail",
      });
      return;
    }
    let newThumnail;
    if (!selectedFile && preview) {
      newThumnail = dataUpdate.thumbnail;
    } else {
      const resUploadFile = await handleUploadFile(selectedFile, "book");
      if (resUploadFile.data) {
        newThumnail = resUploadFile.data.fileUploaded;
        // const res = await UpdateBookModalControled(
        //   id,
        //   mainText,
        //   author,
        //   price,
        //   quantity,
        //   category,
        //   newThumnail
        // );
        // if (res.data) {
        //   notification.success({
        //     message: "create Book",
        //     description: "Update Book thanh cong",
        //   });
        //   resetCloseModel();
        //   await loadBook();
        // } else {
        //   notification.error({
        //     message: "Update book",
        //     description: JSON.stringify(res.message),
        //   });
        // }
      }else {
        no
      }
    }
  };

  const resetCloseModel = () => {
    setId("");
    setIsModalUpdateOpen(false);
    setMainText("");
    setAuthor("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setSelectedFile(null);
    setPreview(null);
    setDataUpdate(null);
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
      <Modal
        title="Update Book"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalUpdateOpen}
        onOk={() => handleClickBtn()}
        onCancel={() => resetCloseModel()}
        maskClosable={false}
        okText={"Create"}
      >
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <div>
            <span>Id</span>
            <Input value={id} disabled />
          </div>
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
      </Modal>
    </div>
  );
};

export default UpdateBookModalControled;
