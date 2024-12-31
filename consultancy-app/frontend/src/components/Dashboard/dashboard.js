import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
// eslint-disable-next-line
import {
  UserOutlined,
  ReadOutlined,
  ProfileOutlined,
  LogoutOutlined,
  DashboardOutlined,
  IdcardOutlined,
  TagOutlined,
  FileDoneOutlined,
} from '@ant-design/icons';



import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useUser } from '../Dashboard/UserContext'; 
import PersonalInformationContent from './PersonalInformationContent';
import InterestsContent from './InterestsContent';
import AssessmentContent from './AssessmentContent';
import RoadmapContent from './RoadmapContent';
import BlogsContent from './BlogsContent';
import CareerPathContent from './CareerPathContent';

import './Dashboard.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Dashboard = () => {
  const { userEmail, logoutUser } = useUser();
  const navigate = useNavigate(); 

  const handleLogout = () => {
    logoutUser();
    navigate('/'); 
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" title="Dashboard">
          <Menu.Item key="1" icon={<IdcardOutlined />}>
          <Link to="/dashboard/personal">Personal Information</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<TagOutlined />}>
          <Link to="/dashboard/interests">Choose Interests</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<FileDoneOutlined />}>
          <Link to="/dashboard/assessment">Assessment</Link>
          </Menu.Item>
          </SubMenu>
          <Menu.Item key="4" icon={<ReadOutlined />}>
            <Link to="/dashboard/blogs">Blogs</Link>
          </Menu.Item>
          <Menu.Item key="5" icon={<ProfileOutlined />}>
            <Link to="/dashboard/roadmap">Roadmaps</Link>
          </Menu.Item>
            <Menu.Item key="6">
              <Link to="/dashboard/career">Explore Career Paths</Link>
            </Menu.Item>
        </Menu>
      </Sider>

      <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }}>
      <div className="user-info">
      <UserOutlined style={{ marginRight: '8px' }} />
       <span>{userEmail}</span>
       </div>
       <LogoutOutlined className="logout-icon" onClick={handleLogout} />
      </Header>


        <Content style={{ margin: '16px' }}>
          <Breadcrumb style={{ margin: '0 0 16px 0' }}>
          <Breadcrumb.Item icon={<DashboardOutlined />}></Breadcrumb.Item>
          <Routes>
          <Route path="personal" element={<Breadcrumb.Item icon={<IdcardOutlined />}></Breadcrumb.Item>} />
          <Route path="interests" element={<Breadcrumb.Item icon={<TagOutlined />}></Breadcrumb.Item>} />
          <Route path="assessment" element={<Breadcrumb.Item icon={<FileDoneOutlined />}></Breadcrumb.Item>} />
          <Route path="career" element={<Breadcrumb.Item icon={<DashboardOutlined />}></Breadcrumb.Item>} />
          </Routes>
          </Breadcrumb>

          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Routes>
              <Route path="personal" element={<PersonalInformationContent />} />
              <Route path="interests" element={<InterestsContent />} />
              <Route path="assessment" element={<AssessmentContent />} />
              <Route path="roadmap" element={<RoadmapContent />} />
              <Route path='blogs' element={<BlogsContent/>}/>
              <Route path="career" element={<CareerPathContent />} />
            </Routes>
          </div>
        </Content>

        <Footer className="footer">EduService ©2024</Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
