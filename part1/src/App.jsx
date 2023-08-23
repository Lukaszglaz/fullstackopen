import { useState } from 'react';

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodClick = () => {
    setGood(good + 1);
  };

  const setNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const setBadClick = () => {
    setBad(bad + 1);
  };

  const totalFeedback = good + neutral + bad;
  const averageFeedback = (good - bad) / totalFeedback;
  const positivePercentage = (good / totalFeedback) * 100;

  return (
    <div>
      <h1>Give FeedBack:</h1>

      <button onClick={setGoodClick}>good opinion</button>
      <button onClick={setNeutralClick}>neutral opinion</button>
      <button onClick={setBadClick}>bad opinion</button>

      <h2>Statistic:</h2>
      <p>Good opinion: {good}</p>
      <p>Neutral opinion: {neutral}</p>
      <p>Bad opinion: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Average: {isNaN(averageFeedback) ? 0 : averageFeedback.toFixed(2)}</p>
      <p>
        Positive Percentage:{' '}
        {isNaN(positivePercentage) ? 0 : positivePercentage.toFixed(2)}%
      </p>
    </div>
  );
};

export default App;
