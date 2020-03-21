import styled from 'styled-components';

//TODO: wie mache ich es so dass ich hier den displaystyle + flexdirection nicht definieren muss und das später noch machen kann?
const Label = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows[100]};
  padding: 8px 16px;
  border-radius: 10px;
`;

export default Label;