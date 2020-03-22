import React from 'react';
import styled from 'styled-components';
import LabeledInput from './labeledInput';
import Card from '../general/card';
import Button from '../general/button';
import H1 from '../general/H1';
import logo from '../../sourceimages/covodLogo.png';
import Label from '../general/label'
import BigInput from '../general/bigInput'

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

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

interface State {
  email: string;
  password: string;
}

interface LoginCardProps {
  onConfirm?: (username: string, password: string) => void;
}

class LoginCard extends React.Component<LoginCardProps, State> {
  constructor(props: LoginCardProps) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  updatePassword(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      email: this.state.email,
      password: evt.target.value
    })
  }

  updateEmail(evt: React.ChangeEvent<HTMLInputElement>) {
    this.setState({
      email: evt.target.value,
      password: this.state.password
    })
  }

  clickConfirm(username: string, password: string) {
    if (this.props.onConfirm != null)
      this.props.onConfirm(username, password)
  }

  render() {
    return (
      <Card>
        <Innercard>
          <CenteringContainer>
            <img src={logo} width="50" height="50" alt="Logo" />
            <H1>CoVoD</H1>
          </CenteringContainer>

          <Flex>
            <Label>Email</Label>
            <BigInput value={this.state.email} type="email" onChange={evt => this.updateEmail(evt)} />
          </Flex>
          <Flex>
            <Label>Password</Label>
            <BigInput value={this.state.password} type="password" onChange={evt => this.updatePassword(evt)} />
          </Flex>

          <CenteringContainer>
            <Button onClick={() => this.clickConfirm(this.state.email, this.state.password)}>Sign in!</Button>
          </CenteringContainer>
        </Innercard>
      </Card>
    );
  };
}



export default LoginCard;
