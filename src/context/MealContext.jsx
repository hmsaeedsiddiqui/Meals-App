

import React, { createContext, useState, useContext } from 'react';

const MealContext = createContext();

const MealProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [weekMeals, setWeekMeals] = useState({
    week1: [],
    week2: [],
    week3: [],
    week4: [],
  });

  const fetchMeals = async () => {
    try {
      const response = await fetch('https://dummyjson.com/recipes');
      const data = await response.json(); 
  
      console.log('Fetched Meals:', data);
      console.log('Recipes:', data.recipes);
  
      setMeals(data.recipes); 
    } catch (error) {
      console.error('Error fetching meals:', error); 
    }
  };
  
  const addMealToWeek = (meal, week) => {
    setWeekMeals((prevMeals) => ({
      ...prevMeals,
      [week]: [...prevMeals[week], meal],
    }));
  };

  const removeMealFromWeek = (mealId, week) => {
    setWeekMeals((prevMeals) => ({
      ...prevMeals,
      [week]: prevMeals[week].filter((meal) => meal.id !== mealId),
    }));
  };

  return (
    <MealContext.Provider
      value={{
        meals,
        selectedMeal,
        weekMeals,
        fetchMeals,
        setSelectedMeal,
        addMealToWeek,
        removeMealFromWeek,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

const useMealContext = () => {
  const context = useContext(MealContext);
  if (!context) {
    throw new Error('useMealContext must be used within a MealProvider');
  }
  return context;
};

export { MealProvider, useMealContext }; 
