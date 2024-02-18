import { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';

import s from './App.module.css';
import Statistics from './Statistics';
import Notification from './Notification';
//---------------------------------------------
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

  render() {
    const totalClicks = this.countTotalFeedback();

    return (
      <div className={s.app}>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            onButtonClick={this.onButtonClick}
            option={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistic">
          {totalClicks > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
