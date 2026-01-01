import { Button, Input } from "antd";
const RegisterPage = () => {
  return (
    <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
      <div>
        <span>FullName</span>
        <Input
          onChange={(name) => setFullName(name.target.value)}
          value={fullName}
        />
      </div>
      <div>
        <span>Email</span>
        <Input
          onChange={(email) => setEmail(email.target.value)}
          value={email}
        />
      </div>
      <div>
        <span>Password</span>
        <Input.Password
          onChange={(password) => setPassword(password.target.value)}
          value={password}
        />
      </div>
      <div>
        <span>Phone number</span>
        <Input
          onChange={(phone) => setPhoneNumber(phone.target.value)}
          value={phoneNumber}
        />
      </div>
    </div>
  );
};

export default RegisterPage;
