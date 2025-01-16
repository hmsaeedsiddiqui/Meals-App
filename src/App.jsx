import React from 'react';
import { MealProvider } from './context/MealContext';
import MealTabs from './components/MealTabs/MealTabs';
import './styles/global.css';
import Header from './components/Header/Header';

const App = () => {
  return (
    <MealProvider>
      <div>
        <Header/>
        <MealTabs />
      </div>
    </MealProvider>
  );
};

export default App;

