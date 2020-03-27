import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primary[500]};
  box-shadow: ${({ theme }) => theme.shadows[100]};
  transition: all 200ms ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.primary[700]};
  }
`;

export const TransparentButton = styled.button`
border: none;
padding: 0;
background: transparent;
box-shadow: none;
cursor: pointer;
`;

export default Button;