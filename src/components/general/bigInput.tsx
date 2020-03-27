import styled from 'styled-components';

const BigInput = styled.input`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 300;
  border: none;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows[100]};
`;

export default BigInput;
