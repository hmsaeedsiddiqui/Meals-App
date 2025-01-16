import React from 'react';
import './Popup.css';

const Popup = ({ selectedWeek, setSelectedWeek, handleSaveMeal, setShowPopup }) => {
  return (
    <div className="popup">
      <h3>Select Week</h3>
      <button onClick={() => setSelectedWeek('week1')}>Week 1</button>
      <button onClick={() => setSelectedWeek('week2')}>Week 2</button>
      <button onClick={() => setSelectedWeek('week3')}>Week 3</button>
      <button onClick={() => setSelectedWeek('week4')}>Week 4</button>
      <button onClick={handleSaveMeal} className='save'>Save</button>
    </div>
  );
};

export default Popup;
