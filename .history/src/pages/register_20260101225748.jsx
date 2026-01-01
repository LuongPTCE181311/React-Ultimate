import { Button, Input, Form } from "antd";
const RegisterPage = () => {
  return (
    <Form
      name="basic"
      layout="vertical"
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >

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
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          // rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        
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
  );
};

export default RegisterPage;
