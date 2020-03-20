import React from 'react';

interface VideoPlayerProps {
  sourceUrl: string;
  sourceType: string;
  timestamp?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  sourceUrl,
  sourceType,
  timestamp
}) => {
  return (
    <video
      controls
      controlsList="nodownload"
      disablePictureInPicture
      preload="auto"
    >
      <source src={`${sourceUrl}#t=${timestamp}`} type={sourceType} />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default VideoPlayer;
