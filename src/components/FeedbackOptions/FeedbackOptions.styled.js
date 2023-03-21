import styled from '@emotion/styled';

const ButtonsWrapper = styled.div`
  display: inline-flex;
  gap: 8px;
  margin: 0 auto 20px;
`;

const Button = styled.button`
  font-size: 20px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 4px;
  padding: 4px 8px;
  color: black;
  background-color: white;
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    border 250ms ease-in-out;

  :hover {
    color: white;
    background-color: teal;
    border: 1px solid teal;
  }
`;
export { ButtonsWrapper, Button };
