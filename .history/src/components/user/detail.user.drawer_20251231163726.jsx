/* eslint-disable react/prop-types */
import { Button, Drawer } from "antd";
import { useEffect, useState } from "react";

const DetailUserDrawer = (props) => {
  // eslint-disable-next-line react/prop-types
  const [id, setId] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { openDrawerDeatilUser, setOpenDrawerDeatilUser, dataUserDetail, setDataUserDetail } =
    props;
  useEffect(() => {
    setId(dataUserDetail.id);
    // eslint-disable-next-line react/prop-types
    setFullName(dataUserDetail.fullName);
  }, [dataUserDetail]);
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
        <p>id:</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default DetailUserDrawer;
