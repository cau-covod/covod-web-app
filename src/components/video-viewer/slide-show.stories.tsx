import React from 'react';
import SlideShow from './slide-show';
import { action } from '@storybook/addon-actions';
import { buildList } from '../../test-utils/builders/list-builder';
import { buildSlide } from '../../test-utils/builders/slide-builder';

export default {
  title: 'VideoViewer/SlideShow',
  component: SlideShow
};

export const Default = () => (
  <SlideShow
    slides={buildList(buildSlide)}
    onSlideSelect={action('Slide selected')}
  />
);

export const ManySlides = () => (
  <SlideShow
    slides={buildList(buildSlide, 100, 150)}
    onSlideSelect={action('Slide selected')}
  />
);
