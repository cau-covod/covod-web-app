import React from 'react';
import VideoPlayer from './video-player';

export default {
  title: 'VideoPlayer/VideoPlayer',
  component: VideoPlayer
};

export const Default = () => (
  <VideoPlayer
    sourceType="video/mp4"
    sourceUrl="https://archive.org/download/Rick_Astley_Never_Gonna_Give_You_Up/Rick_Astley_Never_Gonna_Give_You_Up.mp4"
    timestamp={0}
  />
);
