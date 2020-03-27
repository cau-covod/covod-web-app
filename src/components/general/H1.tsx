import styled from 'styled-components';

// TODO: why is this not applied in LoginCard?
const H1 = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.grays[50]};
`;

export default H1;
