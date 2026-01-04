import { Button, Input, Form, notification, Row, Col } from "antd";
import { registerUserAPI } from "../services/apiservice";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const onFinish = async (values) => {
    const res = await registerUserAPI(
      values.fullName,
      values.email,
      values.password,
      values.phone
    );

    if (res.data) {
      notification.success({
        message: "Register user",
        description: "Dang ky user thanh cong",
      });
      navigate("/login");
    } else {
      notification.error({
        message: "Register user",
        description: JSON.stringify(res.message),
      });
    }
  };
  return (
    <Form
      form={form}
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
      style={{ margin: "10px" }}
    >
      <Row justify={"center"}>
        <Col xs={24} md={6}>
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={6}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={6}>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={6}>
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[
              {
                // required: true,
                message: "Wrong format",
                pattern: new RegExp(/\d+/g),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify={"center"}>
        <div>
          <Button onClick={() => form.submit()} type="primary">
            Register
          </Button>
          <Button
            onClick={() => {
              form.setFieldsValue({
                fullName: "hoidanit",
                email: "hoidanit@gmail.com",
                password: "siuodyfhsdhqw",
                phone: 912234455000,
              });
            }}
          >
            Test
          </Button>
        </div>
      </Row>
    </Form>
  );
};

export default RegisterPage;
