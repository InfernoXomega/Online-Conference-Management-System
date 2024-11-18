import React from 'react';
import { Link } from 'react-router-dom';
import { Conference } from '../types';

interface ConferenceCardProps {
  conference: Conference;
}

const ConferenceCard: React.FC<ConferenceCardProps> = ({ conference }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img 
        src={conference.imageUrl || '/placeholder.svg?height=200&width=400'} 
        alt={conference.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{conference.title}</h3>
        <p className="text-gray-600 mb-4">{conference.description}</p>
        <div className="space-y-2">
          <p><span className="font-medium">Date:</span> {new Date(conference.date).toLocaleDateString()}</p>
          <p><span className="font-medium">Location:</span> {conference.location}</p>
          <p><span className="font-medium">Price:</span> ${conference.price}</p>
          <p><span className="font-medium">Organizer:</span> {conference.organizer}</p>
        </div>
        <Link 
          to={`/conferences/${conference._id}`}
          className="mt-4 inline-block w-full text-center bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ConferenceCard;