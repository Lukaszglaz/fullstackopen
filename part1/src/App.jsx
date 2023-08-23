import React, { useState } from 'react';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

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
      <StatisticLine text='Good' value={good} />
      <StatisticLine text='Neutral' value={neutral} />
      <StatisticLine text='Bad' value={bad} />
      <StatisticLine text='Total' value={totalFeedback} />
      <StatisticLine
        text='Average'
        value={isNaN(averageFeedback) ? 0 : averageFeedback.toFixed(2)}
      />
      <StatisticLine
        text='Positive Percentage'
        value={
          isNaN(positivePercentage) ? 0 : positivePercentage.toFixed(2) + '%'
        }
      />
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
      <Button onClick={handleGoodClick} text='Good' />
      <Button onClick={handleNeutralClick} text='Neutral' />
      <Button onClick={handleBadClick} text='Bad' />

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
