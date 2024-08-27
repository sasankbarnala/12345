// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [habit, setHabit] = useState('');
  const [habits, setHabits] = useState([]);

  const handleAddHabit = () => {
    if (habit.trim() === '') return;
    setHabits([...habits, { name: habit, completed: false }]);
    setHabit('');
  };

  const handleToggleComplete = (index) => {
    const newHabits = habits.map((h, i) =>
      i === index ? { ...h, completed: !h.completed } : h
    );
    setHabits(newHabits);
  };

  const handleDeleteHabit = (index) => {
    const newHabits = habits.filter((_, i) => i !== index);
    setHabits(newHabits);
  };

  return (
    <div className="App">
      <h1>Habit Tracker</h1>
      <div>
        <input
          type="text"
          value={habit}
          onChange={(e) => setHabit(e.target.value)}
          placeholder="Add a new habit"
        />
        <button onClick={handleAddHabit}>Add Habit</button>
      </div>
      <ul>
        {habits.map((h, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={h.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <span style={{ textDecoration: h.completed ? 'line-through' : 'none' }}>
              {h.name}
            </span>
            <button onClick={() => handleDeleteHabit(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
