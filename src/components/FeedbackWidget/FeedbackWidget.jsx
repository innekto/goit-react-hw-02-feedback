import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackWidget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };
    //обробник подій для кнопок відгуків, який збільшує лічильник відповідної категорії в стані.
    handleFeedback = (type) => {
        const { good, neutral, bad } = this.state;

        if (type === 'good') {
            this.setState({ good: good + 1 });
        } else if (type === 'neutral') {
            this.setState({ neutral: neutral + 1 });
        } else if (type === 'bad') {
            this.setState({ bad: bad + 1 });
        }
    };
    //підраховує загальну кількість зібраних відгуків.
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };
    //який підраховує відсоток позитивних відгуків.
    countPositiveFeedbackPercentage = () => {
        const { good } = this.state;
        const total = this.countTotalFeedback();

        if (total === 0) {
            return 0;
        }

        return Math.round((good / total) * 100);
    };

    render() {
        const { good, neutral, bad } = this.state;

        return (
            <div className="App">
                <h1>Please leave feedback</h1>
                <button onClick={() => this.handleFeedback('good')}>Good</button>
                <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
                <button onClick={() => this.handleFeedback('bad')}>Bad</button>
                <div>
                    <h2>Statistics</h2>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {this.countTotalFeedback()}</p>
                    <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
                </div>
            </div>
        );
    }
}

FeedbackWidget.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number
};

export default FeedbackWidget;
