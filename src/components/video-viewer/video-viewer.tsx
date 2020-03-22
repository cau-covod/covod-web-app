import React, { useState } from 'react';
import VideoPlayer from './video-player';
import SlideShow from './slide-show';
import { Slide } from '../../typings/slide';
import styled from 'styled-components';
import { BlueCard } from '../general/card';

interface VideoViewerProps {
  videoUrl: string;
  videoType: string;
  slides: Slide[];
}

const VideoViewer: React.FC<VideoViewerProps> = props => {
  const [timestamp, setTimestamp] = useState(0);

  return (
    <Container>
      <Content>
        <BlueCard>
        <VideoPlayer
          sourceUrl={props.videoUrl}
          sourceType={props.videoType}
          timestamp={timestamp}
        />
        <div style={{height:"8px"}}/>
        <SlideShow slides={props.slides} onSlideSelect={setTimestamp} />
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
