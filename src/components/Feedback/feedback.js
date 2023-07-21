import { Component } from 'react';
import './feedback.css';

class Feedback extends Component {
  state = {
    isFeedBack: true,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onChangeResponse = (feedbackType) => {
    this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) return 0;
    return Math.round((good / totalFeedback) * 100);
  };

originPage = () => {
  const { resources } = this.props;
  const { emojis } = resources;

  return (
    <div className="emojis-container">
      <h1>Please leave feedback</h1>
      <ul className="emoji-container">
        <li className="list-container">
          <button
            type="button"
            onClick={() => this.onChangeResponse('good')}
            className="button"
          >
            <img src={emojis[2].imageUrl} alt={emojis[2].name} className="img" />
            <p>{emojis[2].name}</p>
          </button>
        </li>
        <li className="list-container">
          <button
            type="button"
            onClick={() => this.onChangeResponse('neutral')}
            className="button"
          >
            <img src={emojis[1].imageUrl} alt={emojis[1].name} className="img" />
            <p>{emojis[1].name}</p>
          </button>
        </li>
        <li className="list-container">
          <button
            type="button"
            onClick={() => this.onChangeResponse('bad')}
            className="button"
          >
            <img src={emojis[0].imageUrl} alt={emojis[0].name} className="img" />
            <p>{emojis[0].name}</p>
          </button>
        </li>
      </ul>
    </div>
  );
};


  render() {
    const { isFeedBack, good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const totalPercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className="bg-container">
        <div className="sub-container">
          {isFeedBack ? this.originPage() : null}
          <div className="feedback-counter">
            <p onClick={() => this.onChangeResponse('good')}>Good Feedback: {good}</p>
            <p onClick={() => this.onChangeResponse('neutral')}>Neutral Feedback: {neutral}</p>
            <p onClick={() => this.onChangeResponse('bad')}>Bad Feedback: {bad}</p>
            <p>Total Feedbacks: {totalFeedback}</p>
            <p>Positive Feedback Percentage: {totalPercentage}%</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
