import React from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="feedback-counter">
      <p>Good Feedback: {good}</p>
      <p>Neutral Feedback: {neutral}</p>
      <p>Bad Feedback: {bad}</p>
      <p>Total Feedbacks: {total}</p>
      <p>Positive Feedback Percentage: {positivePercentage}%</p>
    </div>
  );
};

export default Statistics;
