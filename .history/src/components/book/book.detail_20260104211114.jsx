import { Drawer } from "antd";
import { useState } from "react";

const DetailBook = (props) => {
    const {
        setOpenDrawerDeatilBook, 
        openDrawerDeatilBookm, 
        setDataBookDetail, 
        DataBookDetail} = props

    const onClose = () => {
        setOpenDrawerDeatilBook(false);

    }
    
    return (  
        <Drawer
        width={"40vw"}
        title="Chi tiết Book"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={openDrawerDeatilBook}
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
    );
}
 
export default DetailBook;