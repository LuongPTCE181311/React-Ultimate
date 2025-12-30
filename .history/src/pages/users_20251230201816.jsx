import UserForm from "../components/user/user.form";
import Usertable from "../components/user/user.table";

const UsersPage = () => {
    return ( 
        <div>User page
            <div>
                <UserForm />
                <Usertable />
            </div>
        </div>
     );
}
 
export default UsersPage;