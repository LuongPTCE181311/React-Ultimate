/* eslint-disable react/prop-types */
import { Button, Drawer } from "antd";

const DetailUserDrawer = (props) => {
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
            <div>
              <img height={250} width={300} src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataUserDetail.avatar}`} alt="" />
            </div>
            <div>
              <label>Upload avatar</label>
              <input type="file" name="" id="" />
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
