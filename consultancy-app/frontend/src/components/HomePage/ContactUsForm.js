import React, { useState } from 'react';
import { Form, Input, Button, message, Card } from 'antd';

const { TextArea } = Input;

const ContactUsForm = () => {
  const [isSubmitted, setSubmitted] = useState(false);

  const onFinish = (values) => {
    
    console.log('Received values:', values);
    setSubmitted(true);
    message.success('Submitted Successfully');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Card title="Contact Us" bordered={false} style={{ width: 400 }}>
        <Form name="contact-us-form" onFinish={onFinish} layout="vertical">
          <Form.Item
            label="Your Name"
            name="name"
            rules={[{ required: true, message: 'Please enter your name' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Your Email"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Please enter your message' }]}
          >
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

          {isSubmitted && <p style={{ marginTop: 16, color: 'green' }}></p>}
        </Form>
      </Card>
    </div>
  );
};

export default ContactUsForm;
