import React from 'react';
import styled from 'styled-components';
import LabeledInput from './labeledInput';
import Card from '../general/card';
import Button from '../general/button';
import H1 from '../general/H1';

const Innercard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 40px;
`;

const CenteringContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
  justify-content: center;
`;

interface LoginCardProps {
  onConfirm: () => void;
}

const LoginCard: React.FC<LoginCardProps> = props => {
  return (
    <Card>
      <Innercard>
        <CenteringContainer>
          <H1>CoVoD</H1>
        </CenteringContainer>
        <LabeledInput label="Email" type="email" />
        <LabeledInput label="Password" type="password" />
        <CenteringContainer>
          <Button onClick={props.onConfirm}>Sign in!</Button>
        </CenteringContainer>
      </Innercard>
    </Card>
  );
};

export default LoginCard;
