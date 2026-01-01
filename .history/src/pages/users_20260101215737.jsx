import UserForm from "../components/user/user.form";
import Usertable from "../components/user/user.table";
import { useEffect, useState } from "react";
import { fetchAllUserAPI } from "../services/apiservice";

const UsersPage = () => {
  const [dataUsers, setDataUsers] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, serPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log("render  000");
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await fetchAllUserAPI();
    if(res.data.)
    setDataUsers(res.data.result);
  };
  return (
    <div style={{ padding: "20px" }}>
      <UserForm loadUser={loadUser} />
      <Usertable dataUsers={dataUsers} loadUser={loadUser} />
    </div>
  );
};

export default UsersPage;
