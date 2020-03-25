import React from 'react';

import styled from 'styled-components';
import Card from './card';
import logo from '../../sourceimages/covodLogo.png';
import { Link } from 'react-router-dom';

interface TopbarProps {
  location: string;
  logout: () => void;
}

const Topbar: React.FC<TopbarProps> = props => {
  return (
    <Card
      style={{
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
        height: '64px'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: '100%'
        }}
      >
        <HomeLink to="/">
          <Logo src={logo} alt="Logo" />
          <Title>CoVoD</Title>
        </HomeLink>
        <Title>{props.location}</Title>
        <Button onClick={props.logout}>Logout</Button>
      </div>
    </Card>
  );
};

export default Topbar;

const HomeLink = styled(Link)`
  box-sizing: border-box;
  color: inherit;
  text-decoration: none;
  display: block;
  display: flex;
  width: fit-content;
`;

const Logo = styled.img`
  width: 64px;
  margin-right: 8px;
`;

const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  font-weight: 700;
  margin: auto 0;
  color: ${({ theme }) => theme.colors.grays[900]};
`;

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  border: none;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.primary[500]};
  background: transparent;
  transition: all 200ms ease-in-out;
  height: fit-content;
  margin: auto 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[700]};
    background: ${({ theme }) => theme.colors.secondary[300]};
  }
`;
