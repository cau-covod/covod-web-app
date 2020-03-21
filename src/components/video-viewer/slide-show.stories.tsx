import React from 'react';
import SlideShow from './slide-show';
import { action } from '@storybook/addon-actions';
import { buildList } from '../../test-utils/builders/list-builder';
import { slideBuilder } from '../../test-utils/builders/slide-builder';

export default {
  title: 'VideoViewer/SlideShow',
  component: SlideShow
};

export const Default = () => (
  <SlideShow
    slides={buildList(slideBuilder)}
    onSlideSelect={action('Slide selected')}
  />
);

export const ManySlides = () => (
  <SlideShow
    slides={buildList(slideBuilder, 100, 150)}
    onSlideSelect={action('Slide selected')}
  />
);
