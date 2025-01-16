import React from 'react';
import './Rating.css';

const Rating = ({ rating }) => {
  const renderStars = () => {
    const maxStars = 4; // Updated to a 4-star system
    const clampedRating = Math.min(Math.max(rating, 0), maxStars); // Clamp rating between 0 and 4
    const fullStars = Math.floor(clampedRating); 
    const halfStar = clampedRating % 1 !== 0; 
    const emptyStars = maxStars - fullStars - (halfStar ? 1 : 0); 

    return (
      <>
        {Array(fullStars)
          .fill('★')
          .map((star, index) => (
            <span key={`full-${index}`} style={{ color: 'black' }}>
              {star}
            </span>
          ))}
        {halfStar && (
          <span key="half" style={{ color: 'black' }}>
            ★
          </span>
        )}
        {Array(emptyStars)
          .fill('☆')
          .map((star, index) => (
            <span key={`empty-${index}`} style={{ color: 'gray' }}>
              {star}
            </span>
          ))}
      </>
    );
  };

  return (
    <div>
      <div className="star-rating">
        <p>{rating}</p>
        <p className="renderStars">{renderStars()}</p>
      </div>
    </div>
  );
};

export default Rating;
