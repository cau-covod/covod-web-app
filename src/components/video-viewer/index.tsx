import React, { useEffect, useState } from 'react';
import VideoViewer from './video-viewer';
import { buildList } from '../../test-utils/builders/list-builder';
import { buildSlide } from '../../test-utils/builders/slide-builder';
import { Slide } from '../../types/slide';

interface SmartVideoViewerProps {
  videoId: string;
}

const SmartVideoViewer: React.FC<SmartVideoViewerProps> = props => {
  const slides = useSlides(props.videoId);
  const [vidUrl, vidType] = useVideo(props.videoId);

  return <VideoViewer slides={slides} videoType={vidType} videoUrl={vidUrl} />;
};

export default SmartVideoViewer;

function useSlides(videoId: string) {
  // Somehow get the freaking slides
  const [data, setData] = useState<Slide[]>([]);

  useEffect(() => {
    setData(buildList(buildSlide));
  }, [videoId]);

  return data;
}

function useVideo(videoId: string) {
  // Somehow get the video url and type
  const [data] = useState<[string, string]>([
    'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    'video/mp4'
  ]);

  return data;
}
