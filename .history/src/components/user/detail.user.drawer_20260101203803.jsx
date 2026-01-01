/* eslint-disable react/prop-types */
import { Button, Drawer } from "antd";
import { useState } from "react";

const DetailUserDrawer = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const {
    openDrawerDeatilUser,
    setOpenDrawerDeatilUser,
    dataUserDetail,
    setDataUserDetail,
  } = props;
  const showDrawer = () => {
    setOpenDrawerDeatilUser(true);
  };
  const onClose = () => {
    setOpenDrawerDeatilUser(false);
    setDataUserDetail(null);
  };
  const handleOnChangeFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(null);
      return;
    }
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer
        width={"40vw"}
        title="Chi tiết User"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={openDrawerDeatilUser}
      >
        {dataUserDetail ? (
          <>
            <p>id: {dataUserDetail._id}</p>
            <br />
            <p>Full name: {dataUserDetail.fullName}</p>
            <br />
            <p>Email: {dataUserDetail.email}</p>
            <br />
            <p>Phone Number: {dataUserDetail.phone}</p>
            <br />
            <p>Avatar: </p>
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
                  dataUserDetail.avatar
                }`}
                alt=""
              />
            </div>
            <div>
              <label
                htmlFor="btnUpload"
                style={{
                  display: "flex",
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
          </>
        ) : (
          <>Khong co du lieu</>
        )}
      </Drawer>
    </>
  );
};

export default DetailUserDrawer;
