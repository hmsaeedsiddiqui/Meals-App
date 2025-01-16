import React from 'react';
import './MealCard.css';

const MealCard = ({ meal, onClick, isSelected }) => {
    console.log('Rendering MealCard for meal:', meal); // Log inside the component to check if it's being rendered
    return (
      <div
        className={`meal-card ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
      >
        <img src={meal.image} alt={meal.name} className="meal-image" />
        <h3>{meal.name}</h3>
        <p>{meal.mealType}</p>
        <p>{meal.instructions}</p>
        <p>{meal.cuisine}</p>
        <p>Rating: {meal.rating}</p>
      </div>
    );
  };

export default MealCard;
