import { useMemo } from 'react';
import { lecture } from '../services/covod-api';

// Let's keep this hook in the provider layer. This way we can cache the data
// a global state without having to touch any components.
// The hooks act as a fassade.

/**
 * Returns a videoUrl for a given videoId
 * @param videoId
 */
export function useVideo(videoId: string): string {
  // return useMemo(() => lecture.getLectureVideoUrl(videoId), [videoId]);
  return "http://covod.bre4k3r.de:22044/api/v1/lecture/"+videoId+"/media" //TODO: not hardcode this
}
