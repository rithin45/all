import React, { useState } from 'react';
import axios from 'axios';
import { Form, Input, Button, Typography, Row, Col } from 'antd'; // Correct import statements
import { Link, useNavigate } from 'react-router-dom';
import Navsidebar from '../Navbar/Navsidebar';

const { Text } = Typography;

const Signup = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log('Received values:', values);
    
        try {
            const result = await axios.post('http://localhost:3005/register', {
                name: values.name,
                email: values.email,
                password: values.password,
            });
    
            console.log(result);
    
            if (result.status === 201) {
                navigate('/');
            } else {
                // Handle error
            }
        } catch (err) {
            // Handle error
            console.log(err);
        }
    }
    
    return (
        <div style={{ backgroundColor: '#FFF5F5' }}>
            <Navsidebar />
            <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Col span={8}>
                    <center><h1>Signup</h1></center>
                    <Form
                        name="signup-form"
                        onFinish={onFinish}
                        labelCol={{ span: 6 }}
                        wrapperCol={{ span: 18 }}
                        requiredMark={false}
                    >
                        <Form.Item
                            label="Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                        >
                            <Input onChange={(e) => setName(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please enter a valid email address!' },
                            ]}
                        >
                            <Input onChange={(e) => setEmail(e.target.value)} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password onChange={(e) => setPassword(e.target.value)} />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 11, span: 18 }}>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                    <div style={{ textAlign: 'center', marginTop: '16px' }}>
                        <Text>
                            Already have an account? <Link to="/login">Login here</Link>
                        </Text>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Signup;
