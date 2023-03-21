
import Notification from './Notification/Notification'
import React, { Component } from 'react';


import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';

class App extends Component {
    //початковий стан
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };
    // в залежності від типу відгуку збільшуємо відповідну властивість стану на 1.
    handleFeedback = type => {
        const { good, neutral, bad } = this.state;

        switch (type) {
            case 'good':
                this.setState({ good: good + 1 });
                break;
            case 'neutral':
                this.setState({ neutral: neutral + 1 });
                break;
            case 'bad':
                this.setState({ bad: bad + 1 });
                break;
            default:
                console.error('Invalid feedback type:', type);
        }
    };

    //загальну кількість зібраних відгуків.
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
    // відсоток позитивних відгуків.
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();
        return total ? Math.round((good / total) * 100) : 0;
    };

    render() {
        const { good, neutral, bad } = this.state;
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions
                        options={['good', 'neutral', 'bad']}
                        onLeaveFeedback={this.handleFeedback}
                    />
                </Section>

                {total ? (
                    <Section title="Statistics">
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positivePercentage}
                        />
                    </Section>
                ) : (
                    <Notification message="There is no feedback" />
                )}
            </>
        );
    }
}


export { App };
