import React from 'react';
import VideoPlayer from './video-player';
import SlideShow from './slide-show';
import { Slide } from '../../typings/slide';
import styled from 'styled-components';
import { BlueCard } from '../general/card';

interface VideoViewerProps {
  videoUrl: string;
  slides: Slide[];
  timeStamp:number;
  setTimeStamp:(newTimeStamp:number) => void;  
}

const VideoViewer: React.FC<VideoViewerProps> = props => {

  return (
    <Container>
      <Content>
        <BlueCard>
          <VideoPlayer sourceUrl={props.videoUrl} timestamp={props.timeStamp} />
          <div style={{ height: '8px' }} />
          <SlideShow slides={props.slides} onSlideSelect={props.setTimeStamp} />
        </BlueCard>
      </Content>
    </Container>
  );
};

export default VideoViewer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 24px;
`;

const Content = styled.main`
  width: 100%;
  max-width: 1000px;
`;
