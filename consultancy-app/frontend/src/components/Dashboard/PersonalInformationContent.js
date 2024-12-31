import React, { useState } from 'react';
import { Form, Input, Select, DatePicker, Button, Card, message } from 'antd';
import './PersonalInformationContent.css'; 
import { useUser } from '../Dashboard/UserContext';

const { Item } = Form;
const { Option } = Select;

const PersonalInformationContent = () => {
  const [isSaved, setIsSaved] = useState(false);
  const { userEmail } = useUser();

  const onFinish = async (values) => {
    try {
     
      const dataToSend = { ...values, userEmail };

      
      const response = await fetch('http://localhost:5000/api/personal-info/save', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (response.ok) {
        
        message.success('Information saved');
        setIsSaved(true);
      } else {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Failed to save personal information:', error);
      message.error('Failed to save personal information. Please try again.');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    
    setIsSaved(false);
  };

  const validatePhoneNumber = (rule, value) => {
    if (value && !/^\d{10}$/.test(value)) {
      return Promise.reject('Phone number must be 10 digits');
    }
    return Promise.resolve();
  };

  const validateCGPA = (rule, value) => {
    if (value && (isNaN(value) || value < 0 || value > 10)) {
      return Promise.reject('CGPA must be a valid number between 0 and 10');
    }
    return Promise.resolve();
  };

  return (
    <Card title="Personal Information" className="personal-information-card">
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        action="/api/personal-info/save"
        method="POST"
      >
        
        <Item label="Full Name" name="fullName" rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item label="Gender" name="gender" rules={[{ required: true }]}>
          <Select>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Item>
        <Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
          <DatePicker />
        </Item>
        <Item label="Address" name="address" rules={[{ required: true }]}>
          <Input.TextArea />
        </Item>
        <Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            { required: true, message: 'Please input your phone number!' },
            { validator: validatePhoneNumber },
          ]}
        >
          <Input />
        </Item>

        
        <Item label="Degree" name="degree" rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item label="University" name="university" rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item label="Graduation Year" name="graduationYear" rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item label="Field of Study" name="fieldOfStudy" rules={[{ required: true }]}>
          <Input />
        </Item>

        
        <Item label="School" name="school" rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item label="SSLC Mark" name="sslcMark" rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item label="HSC Mark" name="hscMark" rules={[{ required: true }]}>
          <Input />
        </Item>
        <Item
          label="CGPA"
          name="cgpa"
          rules={[
            { required: true, message: 'Please input your CGPA!' },
            { validator: validateCGPA },
          ]}
        >
          <Input />
        </Item>
        <Item label="Highest Qualification" name="highestQualification" rules={[{ required: true }]}>
          <Select>
            <Option value="SSC">SSLC</Option>
            <Option value="HSC">HSC</Option>
            <Option value="UG">UG</Option>
            <Option value="PG">PG</Option>
            <Option value="Polytechnic">Polytechnic</Option>
          </Select>
        </Item>

        
        <Item label="Additional Information" name="additionalInformation" wrapperCol={{ span: 16 }}>
          <Input.TextArea />
        </Item>

        
        <Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" disabled={isSaved}>
            Save
          </Button>
          <Button
            htmlType="button"
            onClick={onReset}
            style={{ marginLeft: 8, backgroundColor: '#007bff', color: 'white' }}
          >
            Reset
          </Button>
          {isSaved && <span className="information-saved-message">Information saved</span>}
        </Item>
      </Form>
    </Card>
  );
};

export default PersonalInformationContent;