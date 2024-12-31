import React, { useState, useEffect } from 'react';
import { Card, List, Button, Select, Row, Col, Typography, Tag, message } from 'antd';
import { useUser } from '../Dashboard/UserContext'; 

const { Option } = Select;
const { Title } = Typography;

const InterestsContent = () => {
  const { chosenInterests, setChosenInterests, chosenSkills, setChosenSkills } = useUser();

  const allInterests = [
    'Reading',
    'Traveling',
    'Music',
    'Sports',
    'Cooking',
    'Coding',
    'Gardening',
    'Photography',
  ];

  const skillOptions = [
    'Programming',
    'Web Development',
    'Database Management',
    'Network Security',
    'Machine Learning',
    'Data Science',
    "Civil Engineering",
    'Mechanical Engineering',
    'Electrical Engineering',
    'Electronics and Communication Engineering',
    'Computer Aided Design (CAD)',
    'Structural Analysis',
    'Thermodynamics',
    'Embedded Systems',
    'Robotics',
    'Technical Drawing and Drafting',
  ];

  const [isSaveEnabled, setIsSaveEnabled] = useState(false);

  const handleAddRemoveInterest = (interest, action) => {
    if (action === 'add') {
      setChosenInterests([...chosenInterests, interest]);
    } else if (action === 'remove') {
      const updatedInterests = chosenInterests.filter((item) => item !== interest);
      setChosenInterests(updatedInterests);
    }
  };

  const handleSave = () => {
    
    message.success('Saved successfully');
  };

  
  useEffect(() => {
    setIsSaveEnabled(chosenInterests.length >= 3 && chosenSkills.length >= 3);
  }, [chosenInterests, chosenSkills]);

  return (
    <div className="interests-content">
      <Row gutter={[16, 16]}>
       
        <Col span={12}>
          <Card title={<Title level={3}>Identify Your Interests</Title>}>
            <List
              dataSource={allInterests}
              renderItem={(interest) => (
                <List.Item>
                  <Row gutter={[16, 16]} justify="space-between" align="middle">
                    <Col>{interest}</Col>
                    <Col>
                      <Button
                        type={chosenInterests.includes(interest) ? 'default' : 'primary'}
                        onClick={() => handleAddRemoveInterest(interest, 'add')}
                      >
                        Add
                      </Button>
                      <Button
                        type={chosenInterests.includes(interest) ? 'primary' : 'default'}
                        onClick={() => handleAddRemoveInterest(interest, 'remove')}
                      >
                        Remove
                      </Button>
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
            {chosenInterests.length >= 3 && (
              <p style={{ color: 'red' }}>Choose At Least Three Interests</p>
            )}
            <div>
              <strong>Chosen Interests: </strong>
              {chosenInterests.map((interest) => (
                <Tag key={interest} color="blue">
                  {interest}
                </Tag>
              ))}
            </div>
          </Card>
        </Col>

        
        <Col span={12}>
          <Card title={<Title level={3}>Identify Your Skills</Title>}>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Select Skills"
              onChange={(selectedSkills) => setChosenSkills(selectedSkills)}
            >
              {skillOptions.map((skill) => (
                <Option key={skill}>{skill}</Option>
              ))}
            </Select>
            {chosenSkills.length >= 3 && (
              <p style={{ color: 'red' }}>Choose At Least Three Skills</p>
            )}
            <div>
              <strong>Chosen Skills: </strong>
              {chosenSkills.map((skill) => (
                <Tag key={skill} color="green">
                  {skill}
                </Tag>
              ))}
            </div>
          </Card>
        </Col>
      </Row>

      
      <Row justify="end" style={{ marginTop: '16px' }}>
        <Button type="primary" onClick={handleSave} disabled={!isSaveEnabled}>
          Save
        </Button>
      </Row>
    </div>
  );
};

export default InterestsContent;
