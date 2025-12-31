import UserForm from "../components/user/user.form";
import Usertable from "../components/user/user.table";

const UsersPage = () => {
  const [dataUsers, setDataUsers] = useState([]);

  useEffect(() => {
    console.log("render  000");
    loadUser();
  }, []);
  return (
    <div style={{padding: "20px"}}>
      <UserForm />
      <Usertable />
    </div>
  );
};

export default UsersPage;
