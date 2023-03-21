// відображаємо секцію з заголовком та дочірніми елементами.

import React from 'react';
import PropTypes from 'prop-types';

import { MainSection, Container, SectionTitle } from './Section.styled';
const Section = ({ title, children }) => (
    <MainSection>
        <Container>
            <SectionTitle>{title}</SectionTitle>
            {children}
        </Container>
    </MainSection>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default Section;
