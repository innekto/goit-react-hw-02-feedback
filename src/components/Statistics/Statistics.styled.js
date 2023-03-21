import styled from '@emotion/styled';

const Stat = styled.p`
  ${props => {
    const firstChild = props.children[0];
    switch (firstChild) {
      case 'Good: ':
        return 'color: green';
      case 'Neutral: ':
        return 'color: orange';
      case 'Bad: ':
        return 'color: red';
      default:
        return '';
    }
  }};
`;

export { Stat };
