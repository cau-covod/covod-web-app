import React from 'react';
import styled from 'styled-components';
import Card from './card';
import H1 from './H1';
import logo from '../../sourceimages/covodLogo.png';

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
`;

interface TopbarProps {
  location: string;
  user: string;
}

const Topbar: React.FC<TopbarProps> = props => {
  return (
    <Card>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <Flex>
          <img src={logo} width="50" height="50" alt="Logo" />
          <H1>CoVoD</H1>
        </Flex>
        <Flex>
          <p>{props.location}</p>
        </Flex>
        <Flex>
          <p>{props.user}</p>
        </Flex>
      </div>
    </Card>
  );
};

export default Topbar;
