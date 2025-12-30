import { Button, Input } from "antd";
import { useState } from "react";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
  return (
    <div className="user-form" style={{margin: "20px 0"}}>
      <div style={{display: "flex", gap: "15px", flexDirection: "column"}}>
        <div>
          <span>FullName</span>
          <Input onChange={(name) => setFullName(name.target.value)}/>
        </div>
        <div>
          <span>Email</span>
          <Input onChange={(email) => setEmail(email.target.value)}/>
        </div>
        <div>
          <span>Password</span>
          <Input.Password onChange={(password) => setPassword(password.target.value)}/>
        </div>
        <div>
          <span>Phone number</span>
          <Input onChange={(name) => setFullName(name.target.value)}/>
        </div>
        <div>
            <Button type="primary">Create user</Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
