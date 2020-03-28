import React, { useState } from 'react';
import styled from 'styled-components';

import { ClientGeneratedComment } from '../../typings/comment'
import { useSlides } from '../../provider/slide-provider';
import { useVideo } from '../../provider/video-provider';
import { useLectureComments, sendComment } from '../../provider/course-provider';

import Card from '../general/card'
import VideoViewer from './video-viewer';
import ScrollingCommentSection from './comments'


interface SmartVideoViewerProps {
  videoId: string;
}

const SmartVideoViewer: React.FC<SmartVideoViewerProps> = props => {
  const slides = useSlides(props.videoId);
  const vidUrl = useVideo(props.videoId);
  const comments = useLectureComments(props.videoId);

  const [timestamp, setTimeStamp] = useState(0);

  return (
    <RowFlex>
      <div style={{ height: '100%' }}>
        <VideoViewer slides={slides}
          videoUrl={vidUrl}
          timeStamp={timestamp}
          setTimeStamp={setTimeStamp} />
      </div>
      <Card style={{ minWidth: '300px' }}>
        <ScrollingCommentSection
          comments={comments}
          setTimeStamp={setTimeStamp}
          sendComment={(comment: ClientGeneratedComment) => sendComment(props.videoId, comment)} />
      </Card>
    </RowFlex>
  )
};

const RowFlex = styled.div`
  display: flex;
  direction: row;
  justify-content: center;
  max-height: 75vh;
`;

export default SmartVideoViewer;
