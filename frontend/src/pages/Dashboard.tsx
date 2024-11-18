import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Conference } from '../types';

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);
  const [userConferences, setUserConferences] = useState<Conference[]>([]);

  useEffect(() => {
    // Fetch user's conferences
    // For now, we'll use mock data
    const mockUserConferences: Conference[] = [
      {
        _id: '1',
        title: 'Web Development Summit 2024',
        description: 'Join us for the latest in web development trends and technologies.',
        date: '2024-06-15',
        location: 'New York, USA',
        price: 599,
        capacity: 500,
        attendees: [],
        imageUrl: '/placeholder.svg?height=200&width=400',
        organizer: 'Tech Conferences Inc.',
        comments: [],
        ratings: []
      },
      // ... Add more mock conferences if needed
    ];
    setUserConferences(mockUserConferences);
  }, []);

  if (!user) {
    return <div>Please log in to view your dashboard.</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Welcome, {user.name}!</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Your Registered Conferences</h3>
        {userConferences.length > 0 ? (
          <ul className="space-y-4">
            {userConferences.map((conference) => (
              <li key={conference._id} className="border-b pb-4">
                <h4 className="text-lg font-medium">{conference.title}</h4>
                <p>Date: {new Date(conference.date).toLocaleDateString()}</p>
                <p>Location: {conference.location}</p>
                <Link 
                  to={`/conferences/${conference._id}`}
                  className="mt-2 inline-block bg-blue-500 text-white py-1 px-3 rounded text-sm hover:bg-blue-600 transition-colors"
                >
                  View Details
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>You haven't registered for any conferences yet.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;