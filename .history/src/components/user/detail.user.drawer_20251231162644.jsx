
import { Button, Drawer } from "antd";
const DetailUserDrawer = (props) => {
    const [fullName, setFullName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const [phoneNumber, setPhoneNumber] = useState("");
  const {openDrawerDeatilUser, setOpenDrawerDeatilUser} = props;
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
