import { Button, Drawer } from "antd";
import { useState } from "react";
const DetailUserDrawer = (props) => {
  const { openDrawerDeatilUser, setOpenDrawerDeatilUser } = props;
  const showDrawer = () => {
    setOpenDrawerDeatilUser(true);
  };
  const onClose = () => {
    setOpenDrawerDeatilUser(false);
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
        <p>id: {}</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default DetailUserDrawer;
