import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows[100]};
  padding: 8px 16px;
  border-radius: 10px;
`;

export const BlueCard = styled(Card)`
  background: ${({ theme }) => theme.colors.primary[500]};
  box-shadow: ${({ theme }) => theme.shadows[100]};
`;

export const LightBlueCard = styled(Card)`
  background: ${({ theme }) => theme.colors.primary[300]};
  box-shadow: ${({ theme }) => theme.shadows[100]};
`;

export default Card;
