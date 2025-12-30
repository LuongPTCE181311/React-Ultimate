import { Input } from "antd";

const UserForm = () => {
  return (
    <div className="user-form">
      <div>
        <div>
          <span>FullName</span>
          <Input />
        </div>
        <div>
          <span>Email</span>
          <Input />
        </div>
        <div>
          <span>Password</span>
          <Input />
        </div>
        <div>
          <span>Phone</span>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
