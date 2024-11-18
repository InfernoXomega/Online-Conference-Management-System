import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Conference, Comment, Rating } from '../types';
import EditConference from '../components/EditConference';

const conferences: Conference[] = [
  {
    _id: '1',
    title: 'Web Development Summit 2024',
    description: 'Join us for the latest in web development trends and technologies.',
    date: '2024-06-15',
    location: 'New York, USA',
    price: 599,
    capacity: 500,
    attendees: [],
    imageUrl: '/images/conference1.jpg',
    organizer: 'Tech Conferences Inc.',
    comments: [],
    ratings: [],
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
    ratings: [],
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
    ratings: [],
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
    ratings: [],
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
    ratings: [],
  },
];

const ConferenceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [conference, setConference] = useState<Conference | null>(null);
  const [abstract, setAbstract] = useState('');
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const foundConference = conferences.find((c) => c._id === id);
    setConference(foundConference || null);
  }, [id]);

  const handleBooking = () => {
    if (!user) {
      navigate('/login');
    } else {
      alert('Conference booked successfully!');
    }
  };

  const handleAbstractSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
    } else {
      alert('Abstract submitted successfully!');
      setAbstract('');
    }
  };

  const handleCommentSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      navigate('/login');
    } else {
      const newComment: Comment = {
        _id: String(Date.now()),
        userId: user._id,
        userName: user.name,
        content: comment, // Updated property name to 'content'
        createdAt: new Date().toISOString(),
      };
      setConference((prev) => (prev ? { ...prev, comments: [...prev.comments, newComment] } : null));
      setComment('');
    }
  };

  const handleRatingSubmission = () => {
    if (!user) {
      navigate('/login');
    } else {
      const newRating: Rating = { userId: user._id, rating: rating };
      setConference((prev) => (prev ? { ...prev, ratings: [...prev.ratings, newRating] } : null));
      alert('Rating submitted successfully!');
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedConference: Conference) => {
    setConference(updatedConference);
    setIsEditing(false);
    alert('Conference details updated successfully!');
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  if (!conference) {
    return <div className="text-center text-white mt-10">Conference not found</div>;
  }

  const averageRating =
    conference.ratings.length > 0
      ? conference.ratings.reduce((sum, r) => sum + r.rating, 0) / conference.ratings.length
      : 0;

  return (
    <div className="container mx-auto px-4 py-8">
      {isEditing ? (
        <EditConference
          conference={conference}
          onSave={handleSave}
          onCancel={handleCancelEdit}
        />
      ) : (
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          <img src={conference.imageUrl} alt={conference.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">{conference.title}</h2>
            <p className="text-gray-600 mb-4">{conference.description}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Date:</span> {new Date(conference.date).toLocaleDateString()}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Location:</span> {conference.location}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Price:</span> ${conference.price}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Capacity:</span> {conference.capacity}
            </p>
            <p className="text-gray-700 mb-6">
              <span className="font-semibold">Organizer:</span> {conference.organizer}
            </p>
            {user && user.role === 'organizer' && (
              <button
                onClick={handleEdit}
                className="w-full bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors mb-4"
              >
                Edit Conference
              </button>
            )}
            <button
              onClick={handleBooking}
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Book Now
            </button>
          </div>
        </div>
      )}

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Submit Abstract</h3>
          <form onSubmit={handleAbstractSubmission}>
            <textarea
              value={abstract}
              onChange={(e) => setAbstract(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              rows={4}
              placeholder="Enter your abstract here..."
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
            >
              Submit Abstract
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Comments</h3>
          {conference.comments.map((comment) => (
            <div key={comment._id} className="mb-4 p-4 bg-gray-100 rounded-lg">
              <p className="font-semibold">{comment.userName}</p>
              <p className="text-gray-600">{comment.content}</p>
              <p className="text-sm text-gray-500">{new Date(comment.createdAt).toLocaleString()}</p>
            </div>
          ))}
          <form onSubmit={handleCommentSubmission}>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500 mb-4"
              rows={4}
              placeholder="Write your comment..."
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Submit Comment
            </button>
          </form>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Ratings</h3>
          <p className="mb-4 text-gray-600">
            <span className="font-semibold">Average Rating:</span> {averageRating.toFixed(1)} / 5
          </p>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700 font-bold">Your Rating:</label>
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            >
              <option value={0} disabled>
                Select rating
              </option>
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={handleRatingSubmission}
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Submit Rating
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConferenceDetails;
