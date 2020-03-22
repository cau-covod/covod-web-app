import React from 'react';
import styled from 'styled-components';
import Card from '../general/card';
import Button from '../general/button';
import H1 from '../general/H1';
import logo from '../../sourceimages/covodLogo.png';
import Label from '../general/label';
import BigInput from '../general/bigInput';

const InnerCard = styled.form`
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

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`;

const ErrorMessage = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #ba2525;
`;

interface State {
  name: string;
  password: string;
  error: string;
}

interface LoginCardProps {
  onConfirm: (username: string, password: string) => Promise<void>;
}

class LoginCard extends React.Component<LoginCardProps, State> {
  constructor(props: LoginCardProps) {
    super(props);
    this.state = {
      name: '',
      password: '',
      error: ''
    };
  }

  updatePassword = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      password: evt.target.value
    });
  };

  updateEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: evt.target.value
    });
  };

  submitLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await this.props.onConfirm(this.state.name, this.state.password);
    } catch (e) {
      this.setState({ error: 'Invalid email or password.' });
    }
  };

  render() {
    return (
      <Card>
        <InnerCard onSubmit={this.submitLogin}>
          <CenteringContainer>
            <img src={logo} width="50" height="50" alt="Logo" />
            <H1>CoVoD</H1>
          </CenteringContainer>

          <Flex>
            <Label htmlFor="name">Username/Email</Label>
            <BigInput
              id="name"
              value={this.state.name}
              type="text"
              onChange={evt => this.updateEmail(evt)}
            />
          </Flex>
          <Flex>
            <Label htmlFor="password">Password</Label>
            <BigInput
              id="password"
              value={this.state.password}
              type="password"
              onChange={evt => this.updatePassword(evt)}
            />
          </Flex>

          <SpaceBetween>
            <ErrorMessage>{this.state.error}</ErrorMessage>
            <Button type="submit">Sign in</Button>
          </SpaceBetween>
        </InnerCard>
      </Card>
    );
  }
}

export default LoginCard;
