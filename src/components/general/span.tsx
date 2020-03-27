import styled from 'styled-components';

const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 8px 4px 4px;
  color: ${({ theme }) => theme.colors.grays[50]};
`;

export default Span;
