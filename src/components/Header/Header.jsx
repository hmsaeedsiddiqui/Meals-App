import React from 'react';
import pizzaImage from '../../assets/pizza.jpg'; 
import './Header.css';

const Header = () => {
  return (
    <div style={{ backgroundImage: `url(${pizzaImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '300px',  }}>
        <div className="heading">
        <div className="container">
          <h1>Optimized Your Meal</h1>
          <p>
            Select Meal to Add In Week. You Will be Able to Edit, Modify, and
            Change the Meal.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
