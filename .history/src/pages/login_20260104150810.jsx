import {
  Button,
  Form,
  Input,
  Typography,
  Space,
  Col,
  message,
  notification,
} from "antd";
import { Divider } from "antd";

import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../services/apiservice";
import { useContext, useState } from "react";
import { AuthContext } from "../components/context/auth.context";

const { Title, Text } = Typography;

const LoginPage = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {user} = useContext(AuthContext);
  const onFinish = async (values) => {
    setLoading(true);
    const res = await handleLogin(values.email, values.password);
    if (res.data) {
      message.success("dang nhap thanh cong");
      setLoading(false);
      localStorage.setItem("access_token", res.data.access_token);
      navigate("/");
    } else {
      notification.error({
        message: "Error Login",
        description: JSON.stringify(res.message),
      });
    }
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
        <fieldset
          style={{
            padding: "15px",
            margin: "5px",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          <Title level={3} style={{ textAlign: "center" }}>
            Đăng Nhập
          </Title>
          <Form layout="vertical" onFinish={onFinish} form={form}>
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
                <Button
                  type="primary"
                  onClick={() => form.submit()}
                  loading={loading}
                >
                  Login
                </Button>

                <Link to={"/"}>Go to homepage →</Link>
              </Space>
            </Form.Item>
          </Form>
          <Divider />
          <div style={{ textAlign: "center", marginTop: 16 }}>
            <Text>Chưa có tài khoản? </Text>
            <Link to={"/register"}>Đăng ký tại đây</Link>
          </div>
        </fieldset>
      </Col>
    </div>
  );
};

export default LoginPage;
