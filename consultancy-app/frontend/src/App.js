import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import AdminLogin from './components/HomePage/AdminLogin';
import AdminDashboard from './components/HomePage/AdminDashboard';
import LoginForm from './components/login/LoginForm';
import SignupForm from './components/signup/SignupForm';
import Dashboard from './components/Dashboard/dashboard';
import ContactUsForm from './components/HomePage/ContactUsForm';
import { UserProvider } from './components/Dashboard/UserContext';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/contact-us" element={<ContactUsForm />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
