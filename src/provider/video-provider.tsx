import { useState } from 'react';

// Let's keep this hook in the provider layer. This way we can cache the data
// a global state without having to touch any components.
// The hooks act as a fassade.

/**
 * Returns a videoUrl and videoType for a given videoId
 * @param videoId
 */
export function useVideo(videoId: string) {
  // Somehow get the video url and type
  const [data] = useState<[string, string]>([
    'https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4',
    'video/mp4'
  ]);

  return data;
}
