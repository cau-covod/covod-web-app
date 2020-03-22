import React from 'react';
import VideoViewer from './video-viewer';
import { useSlides } from '../../provider/slide-provider';
import { useVideo } from '../../provider/video-provider';

interface SmartVideoViewerProps {
  videoId: string;
}

const SmartVideoViewer: React.FC<SmartVideoViewerProps> = props => {
  const slides = useSlides(props.videoId);
  const vidUrl = useVideo(props.videoId);

  return <VideoViewer slides={slides} videoUrl={vidUrl} />;
};

export default SmartVideoViewer;
