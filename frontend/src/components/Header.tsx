import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-[#0f3460] text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:text-gray-200 transition-colors">
            Sagnik's Conference Manager
          </Link>
          <nav>
            <ul className="flex items-center space-x-6">
              <li>
                <Link to="/conferences" className="hover:text-gray-200 transition-colors">
                  Conferences
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link to="/dashboard" className="hover:text-gray-200 transition-colors">
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <span className="text-gray-300">Welcome, {user.name}</span>
                  </li>
                  <li>
                    <button 
                      onClick={handleLogout}
                      className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
                    >
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link 
                      to="/login"
                      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                    >
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/register"
                      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;