import React from 'react';
import { Link } from 'react-router-dom';
import { Conference } from '../types';

const mockConferences: Conference[] = [
  {
    _id: '1',
    title: 'Web Development Summit 2024',
    description: 'Join us for the latest in web development trends and technologies.',
    date: '2024-06-15',
    location: 'New York, NY, USA',
    price: 599,
    capacity: 500,
    attendees: [],
    imageUrl: '/images/conference1.jpg',
    organizer: 'Tech Conferences Inc.',
    comments: [],
    ratings: []
  },
  {
    _id: '2',
    title: 'AI & Machine Learning Conference',
    description: 'Explore the future of AI and machine learning applications.',
    date: '2024-07-20',
    location: 'San Francisco, USA',
    price: 699,
    capacity: 400,
    attendees: [],
    imageUrl: '/images/conference2.jpg',
    organizer: 'AI Research Group',
    comments: [],
    ratings: []
  },
  {
    _id: '3',
    title: 'Cybersecurity Summit 2024',
    description: 'Learn about the latest cybersecurity threats and defense strategies.',
    date: '2024-08-10',
    location: 'London, UK',
    price: 549,
    capacity: 300,
    attendees: [],
    imageUrl: '/images/conference3.jpg',
    organizer: 'Security Experts Association',
    comments: [],
    ratings: []
  },
  {
    _id: '4',
    title: 'Cloud Computing Expo',
    description: 'Discover the latest innovations in cloud technology and infrastructure.',
    date: '2024-09-05',
    location: 'Singapore',
    price: 499,
    capacity: 450,
    attendees: [],
    imageUrl: '/images/conference4.jpg',
    organizer: 'Cloud Tech Forum',
    comments: [],
    ratings: []
  },
  {
    _id: '5',
    title: 'Mobile App Development Workshop',
    description: 'Hands-on workshop for building cutting-edge mobile applications.',
    date: '2024-10-15',
    location: 'Berlin, Germany',
    price: 399,
    capacity: 200,
    attendees: [],
    imageUrl: '/images/conference5.jpg',
    organizer: 'App Developers Association',
    comments: [],
    ratings: []
  }
];

const ConferenceList: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Conferences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockConferences.map((conference) => (
          <div key={conference._id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={conference.imageUrl} alt={conference.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{conference.title}</h3>
              <p className="text-gray-600 mb-4">{conference.description}</p>
              <p><span className="font-medium">Date:</span> {new Date(conference.date).toLocaleDateString()}</p>
              <p><span className="font-medium">Location:</span> {conference.location}</p>
              <p><span className="font-medium">Price:</span> Rs {conference.price}</p>
              <Link 
                to={`/conferences/${conference._id}`}
                className="mt-4 inline-block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConferenceList;