import React, { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import './SignupForm.css';

const { Item } = Form;

const SignupForm = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    try {
      setLoading(true);

      const response = await fetch('http://localhost:5000/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (response.ok) {
        message.success('Signup successful!');
        navigate('/login');
      } else {
        message.error(data.message || 'Signup failed');
        form.setFieldsValue({ password: '' }); 
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-form-container">
      <div className="signup-form-background">
        
      </div>
      <Card title="Sign Up" className="signup-form-card">
        <Form form={form} onFinish={onFinish}>
          <Item name="fullName" label="Full Name" rules={[{ required: true, message: 'Please enter your full name' }]}>
            <Input prefix={<UserOutlined />} placeholder="Full Name" />
          </Item>
          <Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
            <Input prefix={<MailOutlined />} placeholder="Email" />
          </Item>
          <Item
            name="password"
            label="Password"
            rules={[
              { required: true, message: 'Please enter your password' },
              { pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, message: 'Password is not valid' },
            ]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Item>
          <Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Sign Up
            </Button>
          </Item>
          <Item>
            Already have an account? <Link to="/login">Log In</Link>
          </Item>
        </Form>
      </Card>
    </div>
  );
};

export default SignupForm;
