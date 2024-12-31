import React, { useEffect, useState } from 'react';
import { Statistic, Row, Col, Alert, Card, Button, List } from 'antd';
import axios from 'axios';

const AdminDashboard = () => {
  const [userData, setUserData] = useState([]);
  const [personalInfoData, setPersonalInfoData] = useState([]);
  const [error, setError] = useState(null);
  const [viewUsersClicked, setViewUsersClicked] = useState(false);
  const [viewRegistrationsClicked, setViewRegistrationsClicked] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await axios.get('http://localhost:5000/api/users');
        setUserData(usersResponse.data);

        const personalInfoResponse = await axios.get(
          'http://localhost:5000/api/personal-info/getAll'
        );
        setPersonalInfoData(personalInfoResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      }
    };

    fetchData();
  }, []);

  const handleViewUsersClick = () => {
    setViewUsersClicked(true);
    setViewRegistrationsClicked(false);
  };

  const handleViewRegistrationsClick = () => {
    setViewUsersClicked(false);
    setViewRegistrationsClicked(true);
  };

  return (
    <div style={{ padding: '20px', height: '100vh', overflow: 'auto' }}>
      <h2>Dashboard</h2>

      {error && <Alert message={error} type="error" showIcon style={{ marginBottom: '20px' }} />}

      <Row gutter={16}>
        <Col span={12}>
          <Card
            title="Accounts Created"
            extra={
              <Button
                type="primary"
                style={{ background: '#2ecc71', borderColor: '#2ecc71' }}
                onClick={handleViewUsersClick}
              >
                View Users
              </Button>
            }
            style={{ marginBottom: '20px', backgroundColor: '#3498db', color: 'white' }}
          >
            <Statistic value={userData.length} />
          </Card>
        </Col>
        <Col span={12}>
          <Card
            title="Registrations"
            extra={
              <Button
                type="primary"
                style={{ background: '#2ecc71', borderColor: '#2ecc71' }}
                onClick={handleViewRegistrationsClick}
              >
                View Registrations
              </Button>
            }
            style={{ marginBottom: '20px', backgroundColor: '#e74c3c', color: 'white' }}
          >
            <Statistic value={personalInfoData.length} />
          </Card>
        </Col>
      </Row>

      {viewUsersClicked && (
        <Card title="Users Information" style={{ marginTop: '20px',backgroundColor:'aliceblue', borderColor: '#2ecc71' }}>
          <List
            dataSource={userData}
            renderItem={(user) => (
              <List.Item>
                <List.Item.Meta title={user.fullName} description={user.email} />
              </List.Item>
            )}
          />
        </Card>
      )}

{viewRegistrationsClicked && (
        <Card title="Registrations Information" style={{ marginTop: '20px', backgroundColor: 'aliceblue', borderColor: '#2ecc71' }}>
          <List
            dataSource={personalInfoData}
            renderItem={(info) => (
              <List.Item>
                <List.Item.Meta
                  title={`${info.fullName}`}
                  description={`Degree: ${info.degree || 'N/A'}, University: ${info.university || 'N/A'}, Phone: ${info.phoneNumber || 'N/A'}`}
                />
              </List.Item>
            )}
          />
        </Card>
      )}
    </div>
  );
};

export default AdminDashboard;
