// статистика зібраних відгуків.

import React from 'react';
import PropTypes from 'prop-types';

import { Stat } from './Statistics.styled';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    <>
        <Stat good='good'>Good: {good}</Stat>
        <Stat>Neutral: {neutral}</Stat>
        <Stat>Bad: {bad}</Stat>
        <Stat>Total: {total}</Stat>
        <Stat>Positive feedback: {positivePercentage}%</Stat>
    </>
);

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
