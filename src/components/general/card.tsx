import styled from 'styled-components';

//TODO: wie mache ich es so dass ich hier den displaystyle + flexdirection nicht definieren muss und das später noch machen kann?
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary[700]};
  box-shadow: ${({ theme }) => theme.shadows[100]};
  padding: 8px 16px;
`;

export const BlueCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary[500]};
  box-shadow: ${({ theme }) => theme.shadows[100]};
  padding: 8px 16px;
`;

export const LightBlueCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.primary[300]};
  box-shadow: ${({ theme }) => theme.shadows[100]};
  padding: 8px 16px;
`;

export default Card;
