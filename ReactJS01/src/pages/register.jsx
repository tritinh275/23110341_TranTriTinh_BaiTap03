import React from 'react';
import { Button, Form, Input, notification, Row, Col, Divider } from 'antd';
import { createUserApi } from '../util/api';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const { name, email, password } = values;
        const res = await createUserApi(name, email, password);

        if (res && res._id) {
            notification.success({
                message: "CREATE USER",
                description: "Đăng ký người dùng thành công"
            });
            navigate("/login");
        } else {
            notification.error({
                message: "CREATE USER",
                description: "Có lỗi xảy ra"
            });
        }
    };

    return (
        <div style={{ padding: '50px' }}>
            <Row justify="center">
                <Col span={12}>
                    <Divider>Đăng ký tài khoản</Divider>
                    <Form layout='vertical' onFinish={onFinish}>
                        <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email' }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                            <Input.Password />
                        </Form.Item>
                        <Button type="primary" htmlType="submit">Register</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default RegisterPage;