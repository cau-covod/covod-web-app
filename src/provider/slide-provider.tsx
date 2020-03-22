import { useState, useEffect } from 'react';
import { Slide } from '../typings/slide';
import { buildList } from '../test-utils/builders/list-builder';
import { buildSlide } from '../test-utils/builders/slide-builder';

// Let's keep this hook in the provider layer. This way we can cache the data
// a global state without having to touch any components.
// The hooks act as a fassade.

/**
 * Returns a list of slides for a given videoId
 * @param videoId
 */
export function useSlides(videoId: string) {
  // Somehow get the freaking slides
  const [data, setData] = useState<Slide[]>([]);

  useEffect(() => {
    setData(buildList(buildSlide));
  }, [videoId]);

  return data;
}
