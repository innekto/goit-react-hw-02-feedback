import styled from '@emotion/styled';

const ButtonsWrapper = styled.div`
  display: inline-flex;
  gap: 8px;
  margin: auto;
`;

const Button = styled.button`
  font-size: 20px;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 4px 8px;
  color: black;
  background-color: white;
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    border 250ms ease-in-out;

  :hover {
    ${props => {
      const values = Object.values(props);
      console.log(values[1]);
      switch (values[1]) {
        case 'good':
          return 'background-color: green';
        case 'neutral':
          return 'background-color: yellow';
        case 'bad':
          return 'background-color: red';
        default:
          return '';
      }
    }};
    // border: 1px solid teal;
  }
`;
export { ButtonsWrapper, Button };
