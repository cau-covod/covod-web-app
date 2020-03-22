import React from 'react';
import TopBar from '../components/general/topBar'
import styled from 'styled-components';
import FeedEntry from '../components/feed/feedEntry'

const Background = styled.div`
background-color: ${({ theme }) => theme.colors.primary[300]};
display: flex;
flex-direction:column;
width:  100%;
height: 100%;
`

const FeedContainer = styled.div`
background-color: ${({ theme }) => theme.colors.grays[200]};
width:60%;
`



const FeedScreen: React.FC = () => {
  return (
    <Background>
      <TopBar user="username" location="home" />
      <FeedContainer>
        <FeedEntries/>
      </FeedContainer>
    </Background>
  )
};

export default FeedScreen;
