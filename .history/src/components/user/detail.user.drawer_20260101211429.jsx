/* eslint-disable react/prop-types */
import { Button, Drawer, notification } from "antd";
import { useState } from "react";
import { handleUploadFile, updateUserAvatarAPI } from "../../services/apiservice";

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
      setPreview(null);
      return;
    }
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleUpdateUserAvatar = async () => {
    const resUpload = await handleUploadFile(selectedFile, "avatar");
    if (resUpload.data) {
      const newAvatar = resUpload.data.fileUploaded;
      const resUpdateAvatar = updateUserAvatarAPI(dataUserDetail._id, newAvatar);
      if(resUpdateAvatar.data){
        notification.success({
          message: "Update user avatar",
          description: "Cap nhat avatar thanh cong";
        })
      }else{
        notification.error({
        message: "Error upload file",
        description: JSON.stringify(resUpdateAvatar.message),
      });
      }
    } else {
      notification.error({
        message: "Error upload file",
        description: JSON.stringify(resUpload.message),
      });
    }
  };
  return (
    <>
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
    </>
  );
};

export default DetailUserDrawer;
