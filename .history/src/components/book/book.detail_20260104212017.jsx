/* eslint-disable react/prop-types */
import { Drawer } from "antd";

const DetailBook = (props) => {
  const {
    setOpenDrawerDetailBook,
    openDrawerDetailBook,
    setDataBookDetail,
    dataBookDetail,
    loadBook,
  } = props;

  const onClose = () => {
    setOpenDrawerDetailBook(false);
  };

  return (
    <Drawer
      width={"40vw"}
      title="Chi tiết Book"
      closable={{ "aria-label": "Close Button" }}
      onClose={onClose}
      open={openDrawerDetailBook}
    >
      {dataBookDetail ? (
        <>
          <p>id: {dataBookDetail._id}</p>
          <br />
          <p>Tieu de: {dataBookDetail.mainText}</p>
          <br />
          <p>Tac gia: {dataBookDetail.author}</p>
          <br />
          <p>The loai: {dataBookDetail.category}</p>
          <br />
          <p>Gia Tien: {dataBookDetail.price}</p>
          <br />
          <p>So luong: {dataBookDetail.quantity}</p>
          <br />
          <p>Da ban: {dataBookDetail.sold}</p>
          <br />
          <p>Thumbnail: </p>
          <div
            style={{
              marginTop: "10px",
              height: "100px",
              width: "150px",
              border: "1px solid #ccc",
            }}
          >
            <img
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
              src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${
                dataBookDetail.thumbnail
              }`}
              alt=""
            />
          </div>
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
            />
          </div>
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
              <Button type="primary" onClick={() => handleUpdateUserAvatar()}>
                Save
              </Button>
            </div>
          )}
        </>
      ) : (
        <>Khong co du lieu</>
      )}
    </Drawer>
  );
};

export default DetailBook;
