import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const BookConference: React.FC = () => {
  const [numTickets, setNumTickets] = useState(1);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) {
      alert('Please log in to book a conference');
      navigate('/login');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          conferenceId: id,
          numTickets,
        }),
      });

      if (response.ok) {
        alert('Booking successful!');
        navigate('/dashboard');
      } else {
        const errorData = await response.json();
        alert(`Booking failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error booking conference:', error);
      alert('An error occurred while booking the conference');
    }
  };

  return (
    <div className="container">
      <h1>Book Conference</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="numTickets">Number of Tickets:</label>
          <input
            type="number"
            id="numTickets"
            value={numTickets}
            onChange={(e) => setNumTickets(parseInt(e.target.value))}
            min="1"
            required
          />
        </div>
        <button type="submit" className="btn">Book Now</button>
      </form>
    </div>
  );
};

export default BookConference;