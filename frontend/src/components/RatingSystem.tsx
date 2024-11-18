import React, { useState } from 'react';

interface RatingSystemProps {
  onRate: (rating: number) => void;
}

const RatingSystem: React.FC<RatingSystemProps> = ({ onRate }) => {
  const [rating, setRating] = useState(0);

  const handleRate = (value: number) => {
    setRating(value);
    onRate(value);
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <React.Fragment key={value}>
          <input
            type="radio"
            id={`star${value}`}
            name="rating"
            value={value}
            checked={rating === value}
            onChange={() => handleRate(value)}
          />
          <label htmlFor={`star${value}`}>★</label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RatingSystem;