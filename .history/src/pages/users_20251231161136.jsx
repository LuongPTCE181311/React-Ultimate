import UserForm from "../components/user/user.form";
import Usertable from "../components/user/user.table";
import { useEffect, useState } from "react";
import { fetchAllUserAPI } from "../services/apiservice";

const UsersPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    console.log("render  000");
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    setDataUsers(res.data);
  };
  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <Usertable dataUsers={dataUsers} loadUser={loadUser} />
    </div>
  );
};

export default UsersPage;
