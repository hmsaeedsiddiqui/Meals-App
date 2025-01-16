import React, { useState, useEffect } from 'react';
import { useMealContext } from '../../context/MealContext';
import Rating from '../Rating/Rating';
import './MealTabs.css';
import DeleteIcon from '@mui/icons-material/Delete';

const MealTabs = () => {
  const [selectedTab, setSelectedTab] = useState('allMeals');
  const [selectedWeek, setSelectedWeek] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const {
    meals,
    selectedMeal,
    setSelectedMeal,
    weekMeals,
    addMealToWeek,
    removeMealFromWeek,
    fetchMeals,
  } = useMealContext();

  useEffect(() => {
    fetchMeals();
  }, []);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  const handleAddToWeek = () => {
    if (selectedMeal) {
      setShowPopup(true);
    } else {
      alert('Please select a meal first');
    }
  };

  const handleSaveMeal = () => {
    if (selectedWeek) {
      const isMealAlreadyAdded = weekMeals[selectedWeek].some(
        (meal) => meal.id === selectedMeal.id
      );

      if (isMealAlreadyAdded) {
        alert('This meal is already added to the selected week');
      } else {
        addMealToWeek(selectedMeal, selectedWeek);
      }

      setShowPopup(false);
    } else {
      alert('Please select a week');
    }
  };

  const handleRemoveMeal = (mealId, week) => {
    removeMealFromWeek(mealId, week);
  };

  return (
    <>
      <div className="card-info">
        <div className="container">
          <div className="orders">
            <h2>Week Orders</h2>
          </div>
        </div>
      </div>

      <div className="">
        <div className="container">
          <div className="tabs">
            <button
              onClick={() => setSelectedTab('allMeals')}
              className={`tab-button ${selectedTab === 'allMeals' ? 'active-tab' : ''}`}
            >
              All Meal
            </button>
            <button
              onClick={() => setSelectedTab('week1')}
              className={`tab-button ${selectedTab === 'week1' ? 'active-tab' : ''}`}
            >
              Week 1
            </button>
            <button
              onClick={() => setSelectedTab('week2')}
              className={`tab-button ${selectedTab === 'week2' ? 'active-tab' : ''}`}
            >
              Week 2
            </button>
            <button
              onClick={() => setSelectedTab('week3')}
              className={`tab-button ${selectedTab === 'week3' ? 'active-tab' : ''}`}
            >
              Week 3
            </button>
            <button
              onClick={() => setSelectedTab('week4')}
              className={`tab-button ${selectedTab === 'week4' ? 'active-tab' : ''}`}
            >
              Week 4
            </button>
            <button onClick={handleAddToWeek} className="add-to-week-button">
              Add to Week
            </button>
          </div>
        </div>
      </div>

      <div className="card-info">
        <div className="container">
          {selectedTab === 'allMeals' && (
            <div className="cards-container">
              {meals.length === 0 ? (
                <p>Loading meals...</p>
              ) : (
                meals.map((meal) => (
                  <div
                    key={meal.id}
                    className={`meal-card ${selectedMeal && selectedMeal.id === meal.id ? 'selected-meal' : ''}`}
                    onClick={() => handleMealClick(meal)}
                  >
                    <img src={meal.image} alt={meal.name} className="meal-image" />
                    <h3>{meal.name}</h3>
                    <p className="instruction">{meal.instructions}</p>
                    <p className="mealType">{meal.mealType}</p>
                    <div className="rating">
                      <div className="cuisine">
                        <p className="inner-cuisine">Cuisine:</p>
                        <p className="meal-cuisine">{meal.cuisine}</p>
                      </div>
                      <div className="rating-stars">
                        <p className="rating-p">Rating:</p>
                        <p>
                          <Rating rating={meal.rating} />
                        </p>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* Week Meals Tab */}
          {selectedTab !== 'allMeals' && (
            <div className="cards-container">
              {weekMeals[selectedTab].length === 0 ? (
                <p>No meals added for this week</p>
              ) : (
                <div className="card-items">
                  {weekMeals[selectedTab].map((meal) => (
                    <div key={meal.id} className="meal-card">
                      <img src={meal.image} alt={meal.name} className="meal-image" />
                      <h3>{meal.name}</h3>
                      <p className="instruction">{meal.instructions}</p>
                      <p className="mealType">{meal.mealType}</p>
                      <button
                        className="delete-button"
                        onClick={() => handleRemoveMeal(meal.id, selectedTab)}
                      >
                        <DeleteIcon />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Popup to Select Week */}
          {showPopup && (
            <div className="popup">
              <h3>Select Week</h3>
              <div className="popup-buttons">
                <button
                  onClick={() => setSelectedWeek('week1')}
                  className={`week-button ${selectedWeek === 'week1' ? 'active-week' : ''}`}
                >
                  Week 1
                </button>
                <button
                  onClick={() => setSelectedWeek('week2')}
                  className={`week-button ${selectedWeek === 'week2' ? 'active-week' : ''}`}
                >
                  Week 2
                </button>
                <button
                  onClick={() => setSelectedWeek('week3')}
                  className={`week-button ${selectedWeek === 'week3' ? 'active-week' : ''}`}
                >
                  Week 3
                </button>
                <button
                  onClick={() => setSelectedWeek('week4')}
                  className={`week-button ${selectedWeek === 'week4' ? 'active-week' : ''}`}
                >
                  Week 4
                </button>
              </div>
              <div>
                <a onClick={handleSaveMeal} className="save">
                  Save
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MealTabs;
