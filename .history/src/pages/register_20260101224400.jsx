import { Button, Input } from "antd";
const RegisterPage = () => {
  return (
    <div style={{ 
      display: "flex", gap: "10px", flexDirection: "column" }}>
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
        <Input.Password />
      </div>
      <div>
        <span>Phone number</span>
        <Input />
      </div>
      <div>
        <Button type="primary">Register</Button>
      </div>
    </div>
  );
};

export default RegisterPage;
