import React, { useContext } from 'react';
import { Button, Form, Input, notification, Row, Col, Divider } from 'antd';
import { loginApi } from '../util/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/context/auth.context';

const LoginPage = () => {
    const navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);

    const onFinish = async (values) => {
        const { email, password } = values;
        const res = await loginApi(email, password);

        if (res && res.EC === 0) {
            localStorage.setItem("access_token", res.access_token);
            notification.success({
                message: "LOGIN USER",
                description: "Đăng nhập thành công"
            });
            setAuth({
                isAuthenticated: true,
                user: { email: res?.user?.email, name: res?.user?.name }
            });
            navigate("/");
        } else {
            notification.error({
                message: "LOGIN USER",
                description: res?.EM || "Có lỗi xảy ra"
            });
        }
    };

    return (
        <div style={{ padding: '50px' }}>
            <Row justify="center">
                <Col span={12}>
                    <Divider>Đăng nhập</Divider>
                    <Form layout='vertical' onFinish={onFinish}>
                        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default LoginPage;