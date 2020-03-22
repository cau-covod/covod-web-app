import React from 'react';
import VideoViewer from './video-viewer';
import { buildList } from '../../test-utils/builders/list-builder';
import { buildSlide } from '../../test-utils/builders/slide-builder';

export default {
  title: 'VideoViewer/VideoViewer',
  component: VideoViewer
};

export const Default = () => (
  <VideoViewer
    slides={buildList(buildSlide, 20)}
    videoUrl="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  />
);
