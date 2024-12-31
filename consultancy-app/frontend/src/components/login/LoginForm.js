import React from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import { useUser } from '../Dashboard/UserContext'; 
import './LoginForm.css';

const { Item } = Form;

const LoginForm = () => {
  const navigate = useNavigate();
  const { loginUser } = useUser();  

  const onFinish = async (values) => {
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful!');
        loginUser(values.email);
        navigate('/dashboard/personal');
      } else {
        console.error('Login failed:', data.message);
        message.error('Invalid credentials. Please check your email and password.');
      }
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-background">
       
      </div>
      <Card title="Login" className="login-form-card">
        <Form onFinish={onFinish}>
          <Item
            name="email"
            label="Email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
          >
            <Input
              prefix={<MailOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} 
            />
          </Item>
          <Item name="password" label="Password" rules={[{ required: true }]}>
            <Input.Password
              prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />} 
            />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Item>
          <Item>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;
