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
  setTopState?: (newValue: string) => void
}

interface State {
  inputValue: string;
}

class LabeledInput extends React.Component<LabeledInputProps, State> {
  constructor(props: LabeledInputProps) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  render() {
    return (
      <Flex>
        <Label>{this.props.label}</Label>
        <BigInput value={this.state.inputValue} type={this.props.type} onChange={evt => this.updateInputValue(evt)} />
      </Flex>
    );
  }

  updateInputValue(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputValue: evt.target.value
    });
    // console.log(this.state.inputValue) //TODO: kann es sein dass er hier immer einen zurück ist?
    if (this.props.setTopState != null)
      this.props.setTopState(evt.target.value)
  }
}

export default LabeledInput;
