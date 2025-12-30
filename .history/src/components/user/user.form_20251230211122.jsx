import { Input } from "antd";

const UserForm = () => {
  return (
    <div className="user-form" style>
      <div style={{display: "flex", gap: "10px", flexDirection: "column"}}>
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
          <span>Phone number</span>
          <Input />
        </div>
      </div>
    </div>
  );
};

export default UserForm;
