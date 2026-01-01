
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
        title="Chi tiết User"
        closable={{ "aria-label": "Close Button" }}
        onClose={onClose}
        open={openDrawerDeatilUser}
      >
        <p>id: {dataUserDetail._id}</p>
        <p>Full name: {dataUserDetail.fullName}</p>
        <p>Email: {dataUserDetail.email}</p>
        <p>Phone Number: {dataUserDetail.phone}</p>
      </Drawer>
    </>
  );
};

export default DetailUserDrawer;
