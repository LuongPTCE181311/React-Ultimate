import { Button, Input, Form } from "antd";
const RegisterPage = () => {
  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        layout="vertical"
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <div
          style={{
            margin: "50px",
            display: "flex",
            gap: "15px",
            flexDirection: "column",
          }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
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
      </Form>
    </div>
  );
};

export default RegisterPage;
