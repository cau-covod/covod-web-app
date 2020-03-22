import React from 'react';
import Topbar from '../components/general/topBar';
import { useUserInfo } from '../provider/authentication-provider';
import SmartFeed from '../components/feed';
import styled from 'styled-components';
import Background from '../components/general/background'

const FeedScreen: React.FC = () => {
  const { username } = useUserInfo();
  return (
    <Background>
      <Container>
        <Topbar location="Feed" user={username} />
        <SmartFeed />
      </Container>
    </Background>
  );
};

export default FeedScreen;

const Container = styled.div`
  & > * {
    margin-bottom: 16px;
  }

  & > :last-child {
    max-width: 60%;
    margin: 0 auto;
  }
`;
