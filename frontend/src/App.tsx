import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ConferenceList from './pages/ConferenceList';
import ConferenceDetails from './pages/ConferenceDetails';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AbstractSubmission from './pages/AbstractSubmission';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-[#1a1a2e] text-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/conferences" element={<ConferenceList />} />
              <Route path="/conferences/:id" element={<ConferenceDetails />} />
              <Route path="/conferences/:id/submit-abstract" element={<AbstractSubmission />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;