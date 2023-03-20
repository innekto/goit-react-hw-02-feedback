import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FeedbackWidget extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

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

    render() {
        const { good, neutral, bad } = this.state;
        return (
            <div className="App">
                <h1>Відгуки</h1>
                <button onClick={() => this.handleFeedback('good')}>Good</button>
                <button onClick={() => this.handleFeedback('neutral')}>Neutral</button>
                <button onClick={() => this.handleFeedback('bad')}>Bad</button>
                <div>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
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

