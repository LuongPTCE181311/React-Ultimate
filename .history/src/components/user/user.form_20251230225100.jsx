import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/apiservice";


const UserForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleClickBtn = async () => {

    const res = await createUserAPI(fullName, email, password, phoneNumber);
    if(res.data){
        notification.success({
            message: "create user",
            description: "tao user thanh cong"
        })
    }else{
        notification.error({
            message: "create user"
        })
    }
    console.log("check ress >>>>>>>>>", res.data);
  };
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>FullName</span>
          <Input onChange={(name) => setFullName(name.target.value)} />
        </div>
        <div>
          <span>Email</span>
          <Input onChange={(email) => setEmail(email.target.value)} />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            onChange={(password) => setPassword(password.target.value)}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input onChange={(phone) => setPhoneNumber(phone.target.value)} />
        </div>
        <div>
          <Button type="primary" onClick={() => handleClickBtn()}>
            Create user
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
