import React, { useState, useEffect } from 'react';
import { Card, Row, Col, Typography, List } from 'antd';
import { useUser } from './UserContext'; 

const { Title } = Typography;

const RoadmapContent = () => {
  const { chosenSkills, chosenInterests } = useUser();
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/recommendations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ chosenSkills, chosenInterests }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Received recommendations:', data.recommendations); 
          setRecommendations(data.recommendations);
        } else {
          console.error('Failed to fetch recommendations');
        }
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, [chosenSkills, chosenInterests]);

  return (
    <div className="roadmap-content">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <Card title={<Title level={3}>Personalized Career Roadmap</Title>}>
            <List
              dataSource={recommendations}
              renderItem={(item) => (
                <List.Item key={item.title}>
                  <Card title={item.title}>
                    <p>{item.description}</p>
                    <p>
                      <strong>Online Paid Course:</strong>{' '}
                      <a href={item.studyResources.onlinePaidCourse} target="_blank" rel="noopener noreferrer">
                        Explore
                      </a>
                    </p>
                    <p>
                      <strong>YouTube Free Course:</strong>{' '}
                      <a href={item.studyResources.youtubeFreeCourse} target="_blank" rel="noopener noreferrer">
                        Watch 
                      </a>
                    </p>
                    <p>
                      <strong>Online Study Material:</strong>{' '}
                      <a href={item.studyResources.onlineStudyMaterial} target="_blank" rel="noopener noreferrer">
                        Learn
                      </a>
                    </p>
                  </Card>
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RoadmapContent;
