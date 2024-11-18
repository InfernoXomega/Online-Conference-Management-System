import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative min-h-[calc(100vh-64px)]">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/images/conference-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.3)'
        }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
          Welcome to Sagnik's Conference Manager
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl">
          Discover and book exciting conferences from around the world!
        </p>
        <div className="flex flex-col sm:flex-row gap-6">
          <Link 
            to="/conferences" 
            className="btn btn-primary text-lg font-semibold px-8 py-3"
          >
            Browse Conferences
          </Link>
          <Link 
            to="/register" 
            className="btn btn-secondary text-lg font-semibold px-8 py-3"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;