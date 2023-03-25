import { Component } from 'react';
import FeedbackOptions from './feedback/FeedbackOptions';
import Notification from './notification/Notification';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
// import Reviews from './reviews/Revievs';
import { Container } from './container/Container.styled';

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
    const { addGood, addNeutral, addBad } = this;
    const onLeaveFeedback = this.countTotalFeedback() ? true : false;
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={[addGood, addNeutral, addBad]}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {!onLeaveFeedback ? (
            <Notification message="There is no feedback"></Notification>
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
