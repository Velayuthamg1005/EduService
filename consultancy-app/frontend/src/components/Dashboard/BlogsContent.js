import React from 'react';
import { Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

const BlogsContent = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <Link to="https://kitaboo.com/trends-in-education-technology/">
            <Card
              hoverable
              style={{ background: '#7B68EE' }}
            >
              <Meta title="Tech Trends in Education" description="Stay updated with the latest tech trends shaping education." />
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Link to="https://slideswith.com/blog/classroom-technology-tools">
            <Card
              hoverable
              style={{ background: '#87CEEB' }}
            >
              <Meta title="Educational Tools Reviews" description="Explore reviews of educational technology tools for effective learning." />
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Link to="https://devopscube.com/top-websites-to-learn-programming-online/">
            <Card
              hoverable
              style={{ background: '#98FB98' }}
            >
              <Meta title="Coding Tutorials and Resources" description="Learn coding with our tutorials and discover valuable programming resources." />
            </Card>
          </Link>
        </Col>
      </Row>

      <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
        <Col xs={24} sm={12} md={8}>
          <Link to="https://www.upgrad.com/blog/trending-courses-online/">
            <Card
              hoverable
              style={{ background: '#98FB98' }}
            >
              <Meta title="Online Courses Recommendations" description="Discover recommended online courses and learning platforms." />
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Link to="https://medium.com/@aeark0011/financial-literacy-for-students-a-practical-guide-637c855da292#:~:text=%22Financial%20Literacy%20for%20Students%3A%20A%20Practical%20Guide%22%201,Financial%20Goal%20Setting%3A%20...%207%207.%20Embracing%20Frugality%3A">
            <Card
              hoverable
              style={{ background: '#FF6347' }}
            >
              <Meta
                title="Financial Literacy Tips"
                description="Budgeting tips, understanding student loans, part-time job opportunities for students."
              />
            </Card>
          </Link>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Link to="https://www.thecareerproject.org/start/career-roadmap/">
            <Card
              hoverable
              style={{ background: '#7B68EE' }}
            >
              <Meta title="Insights into Career Paths" description="Explore various career paths, industry insights, and tips for success." />
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default BlogsContent;
