import React, { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {
  const totalFeedback = good + neutral + bad;
  const averageFeedback = (good - bad) / totalFeedback;
  const positivePercentage = (good / totalFeedback) * 100;

  if (totalFeedback === 0) {
    return (
      <div>
        <h2>Statistics:</h2>
        <p>No feedback given yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Statistics:</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Average: {isNaN(averageFeedback) ? 0 : averageFeedback.toFixed(2)}</p>
      <p>
        Positive Percentage:{' '}
        {isNaN(positivePercentage) ? 0 : positivePercentage.toFixed(2)}%
      </p>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>Give Feedback:</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
