import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface VideoPlayerProps {
  sourceUrl: string;
  sourceType: string;
  /** Timestamp in second the player should jump to */
  timestamp?: number;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  sourceUrl,
  sourceType,
  timestamp
}) => {
  const player = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!player.current || typeof timestamp === 'undefined' || timestamp < 0)
      return;

    player.current.currentTime = timestamp;
  }, [timestamp]);

  return (
    <Video
      ref={player}
      controls
      controlsList="nodownload"
      disablePictureInPicture
      preload="auto"
    >
      <source src={`${sourceUrl}`} type={sourceType} />
      Sorry, your browser doesn't support embedded videos.
    </Video>
  );
};

export default VideoPlayer;

const Video = styled.video`
  width: 100%;
`;
