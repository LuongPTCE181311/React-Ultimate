import UserForm from "../components/user/user.form";
import Usertable from "../components/user/user.table";

const UsersPage = () => {
    return ( 
        <div>User page
            
                <UserForm />
                <Usertable />
            
        </div>
     );
}
 
export default UsersPage;