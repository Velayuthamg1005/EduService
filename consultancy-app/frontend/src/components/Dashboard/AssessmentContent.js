import React, { useState } from 'react';
import { Card, Button, Row, Col, Space } from 'antd';
import LogicalAssessment from '../../assessments/LogicalAssessment'; 
import SpatialAssessment from '../../assessments/SpatialAssessment'; 
import OrganizationalAssessment from '../../assessments/OrganizationalAssessment'; 
import PhysicalAssessment from '../../assessments/PhysicalAssessment';

const { Meta } = Card;


const AssessmentContent = () => {
  const [selectedAssessment, setSelectedAssessment] = useState(null);

  const handleFreeAssessment = (aptitude) => {
    setSelectedAssessment(aptitude);
  };

  const aptitudes = [
    { title: 'Logical Aptitude', description: 'Enhance logical reasoning skills for effective decision-making.' },
    { title: 'Spatial Aptitude', description: 'Understand and interpret spatial relationships for visualization.' },
    { title: 'Organizational Aptitude', description: 'Develop skills in task and time management for efficiency.' },
    { title: 'Physical Aptitude', description: 'Measure the body\'s ability for physical tasks and active lifestyle.' },
  ];

  return (
    <div className="assessment-content">
      
      <Row gutter={[16, 16]}>
        {aptitudes.map((aptitude, index) => (
          <Col key={index} span={24} md={12} lg={6}>
            <Card>
              <Meta title={aptitude.title} description={aptitude.description} />
              <Space direction="vertical" style={{ marginTop: '10px' }}>
                <Button type="primary" onClick={() => handleFreeAssessment(aptitude.title)}>
                  Free Assessment
                </Button>
              </Space>
            </Card>
          </Col>
        ))}
      </Row>

      
      {selectedAssessment === 'Logical Aptitude' && <LogicalAssessment />}
      {selectedAssessment === 'Spatial Aptitude' && <SpatialAssessment />}
      {selectedAssessment === 'Organizational Aptitude' && <OrganizationalAssessment />}
      {selectedAssessment === 'Physical Aptitude' && <PhysicalAssessment />}
    </div>
  );
};

export default AssessmentContent;
