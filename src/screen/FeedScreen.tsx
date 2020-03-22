import React from 'react';
import Topbar from '../components/general/topBar';
import { useAuth } from '../provider/authentication-provider';
import SmartFeed from '../components/feed';
import styled from 'styled-components';
import Background from '../components/general/background';

const FeedScreen: React.FC = () => {
  const { logout } = useAuth();
  return (
    <Background>
      <Container>
        <Topbar location="Feed" logout={logout} />
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
