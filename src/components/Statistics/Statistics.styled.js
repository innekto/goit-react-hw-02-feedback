import styled from '@emotion/styled';

const Stat = styled.p`
  ${props => {
    const firstChild = props.children[0];
    switch (firstChild) {
      case 'Good: ':
        return 'color: green';
      case 'Neutral: ':
        return 'color: yellow';
      case 'Bad: ':
        return 'color: red';
      default:
        return '';
    }
  }};
  margin: 0;
`;

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;
`;

export { Stat, StatContainer };
