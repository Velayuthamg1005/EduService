import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button, Typography, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './HomePage.css';

const { Title } = Typography;

const HomePage = () => {
  const featureBoxesRef = useRef(null);

  const scrollToBottom = () => {
    if (featureBoxesRef.current) {
      featureBoxesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="main-container">
      <div className="header">
        <div className="logo">
          <Title level={3} style={{ color: 'white' }}>
            EduService
          </Title>
        </div>
        <div className="menu">
          <span className="menu-item" onClick={scrollToBottom}>
            Services
          </span>
          <Link to="/contact-us" className="menu-item">
            Contact Us
          </Link>
          <Link to="/login" className="menu-item">
            Login
          </Link>
          <Link to="/admin-login" className="menu-item">
            <Avatar size="small" icon={<UserOutlined />} /> 
          </Link>
        </div>
      </div>

      <div className="hero-section">
        <h1>Welcome to EduService</h1>
        <p>Get personalized educational consultancy services to achieve your career goals.</p>
        <Link to="/login">
          <Button type="primary" className="get-started-btn">
            Get Started
          </Button>
        </Link>
      </div>

      <div className="feature-boxes" ref={featureBoxesRef}>
        <div className="feature-box" style={{ backgroundColor: '' }}>
          <h2>Free Assessment</h2>
          <p>Receive a complimentary assessment of your educational needs.</p>
        </div>
        <div className="feature-box" style={{ backgroundColor: '' }}>
          <h2>Identify Your Skills</h2>
          <p>Discover and understand your unique skills and talents.</p>
        </div>
        <div className="feature-box" style={{ backgroundColor: '' }}>
          <h2>Workshop Insights</h2>
          <p>Stay updated with the latest tech trends shaping education.</p>
        </div>
      </div>

      <div className="footer">
        <p>EduService - Onwards and Upwards</p>
      </div>
    </div>
  );
};

export default HomePage;
