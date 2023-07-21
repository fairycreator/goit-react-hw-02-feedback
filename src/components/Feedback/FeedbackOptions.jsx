import React from 'react';


const FeedbackOptions = ({ options, resources, onLeaveFeedback }) => {
  const { emojis } = resources;

  return (
    <ul className="emoji-container">
      {options.map((option) => {
        const emoji = emojis.find((emoji) => emoji.name.toLowerCase() === option.toLowerCase());
        return (
          <li key={option} className="list-container">
            <button type="button" onClick={() => onLeaveFeedback(option, emoji)} className="button">
              {emoji && <img src={emoji.imageUrl} alt={emoji.name} className="img" />}
              <p>{option}</p>
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FeedbackOptions;

