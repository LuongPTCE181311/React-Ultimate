import { Button, Form, Input, Card, Typography, Space, Col } from "antd";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const LoginPage = () => {
  const onFinish = (values) => {
    console.log("Login data:", values);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fa",
      }}
    >
      <Col xs={24} md={16} lg={8}>
        <fieldset style={{
            padding: "15px",
            margin
        }}></fieldset>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item>
            <Space
              style={{
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Button type="primary" htmlType="submit">
                Login
              </Button>

              <Link to={"/"}>Go to homepage →</Link>
            </Space>
          </Form.Item>
        </Form>

        <div style={{ textAlign: "center", marginTop: 16 }}>
          <Text>Chưa có tài khoản? </Text>
          <Link to={"/register"}>Đăng ký tại đây</Link>
        </div>
      </Col>
    </div>
  );
};

export default LoginPage;
