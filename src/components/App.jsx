import { Component } from 'react';
// import Reviews from './reviews/Revievs';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(prev => ({ good: prev.good + 1 }));
  };

  addNeutral = () => {
    this.setState(prev => ({ neutral: prev.neutral + 1 }));
  };

  addBad = () => {
    this.setState(prev => ({ bad: prev.bad + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() &&
    Math.round((this.state.good / this.countTotalFeedback()) * 100);

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <h2> Please leave feedback</h2>
        <div>
          <button onClick={this.addGood}>Good</button>
          <button onClick={this.addNeutral}>Neutral</button>
          <button onClick={this.addBad}>Bad</button>
        </div>
        <h2>Statistics</h2>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {this.countTotalFeedback()}</p>
        <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
    );
  }
}

export default App;
