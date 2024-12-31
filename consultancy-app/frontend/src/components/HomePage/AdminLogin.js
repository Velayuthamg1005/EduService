import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons'; 
import './AdminLogin.css';

const AdminLogin = () => {
  const navigate = useNavigate();


const onFinish = (values) => {
  if (values.email === 'adminme@gmail.com' && values.password === 'velsviki') {
    navigate('/admin/dashboard');
  } else {
    console.log('Invalid credentials');
  }
};


  return (
    <div className="admin-login-container">
      <h2 className="login-header">Login</h2>
      <Form onFinish={onFinish} className="login-form">
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please enter your email!',
            },
          ]}
        >
          <Input
            placeholder="Email"
            className="input-field"
            prefix={<UserOutlined />} 
          />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please enter your password!',
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            className="input-field"
            prefix={<LockOutlined />} 
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-btn">
            Login
          </Button>
        </Form.Item>
      </Form>
      <Link to="/" className="back-link">
        Back to Home
      </Link>
    </div>
  );
};

export default AdminLogin;
