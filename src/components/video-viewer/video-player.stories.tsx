import React, { useState } from 'react';
import VideoPlayer from './video-player';

export default {
  title: 'VideoViewer/VideoPlayer',
  component: VideoPlayer
};

export const Default = () => (
  <VideoPlayer sourceUrl="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4" />
);

const WithTimeJumps: React.FC = () => {
  const [timestamp, setTimestamp] = useState(0);

  return (
    <div>
      <div>
        <span>Timestamp at: {timestamp}</span>
        <button onClick={() => setTimestamp(old => (old > 10 ? old - 10 : 0))}>
          Reduce timestamp by 10sec
        </button>
        <button onClick={() => setTimestamp(old => old + 10)}>
          Increase timestamp by 10sec
        </button>
      </div>
      <VideoPlayer
        sourceUrl="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
        timestamp={timestamp}
      />
    </div>
  );
};

export const TimeStamps = () => <WithTimeJumps />;
