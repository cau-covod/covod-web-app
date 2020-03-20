import React from 'react';
import VideoPlayer from './video-player';

export default {
  title: 'VideoPlayer/VideoPlayer',
  component: VideoPlayer
};

export const Default = () => (
  <VideoPlayer
    sourceType="video/mp4"
    sourceUrl="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
    timestamp={30}
  />
);
