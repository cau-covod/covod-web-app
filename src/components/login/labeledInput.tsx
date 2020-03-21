import React from 'react';
import styled from 'styled-components';
import BigInput from '../general/bigInput';
import Label from '../general/label';

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

interface LabeledInputProps {
  label: string;
  type?: string;
}

const LabeledInput: React.FC<LabeledInputProps> = props => {
  return (
    <Flex>
      <Label>{props.label}</Label>
      <BigInput type={props.type} />
    </Flex>
  );
};

export default LabeledInput;
