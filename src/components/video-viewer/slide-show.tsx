import React from 'react';
import styled from 'styled-components';
import { Slide } from '../../typings/slide';
import { getTimeString } from '../../utils/sec-to-min';

interface SlideShowProps {
  slides: Slide[];
  onSlideSelect: (timestamp: number) => void;
}

const SlideShow: React.FC<SlideShowProps> = ({ slides, onSlideSelect }) => {
  return (
    <SlideContainer>
      {slides.map(slide => (
        <TransparentButton
          key={slide.id}
          onClick={() => onSlideSelect(slide.timestamp)}
          title={`Jump to ${getTimeString(slide.timestamp)}`}
        >
          <SlideImage src={slide.imageUrl} />
        </TransparentButton>
      ))}
    </SlideContainer>
  );
};

export default SlideShow;

const SlideContainer = styled.div`
  display: flex;
  overflow-x: auto;

  & > * {
    margin-right: 4px;
  }

  & > :last-child {
    margin-right: 0;
  }
`;

const TransparentButton = styled.button`
  border: none;
  padding: 0;
  background: transparent;
  box-shadow: none;
  cursor: pointer;
`;

const SlideImage = styled.img`
  max-height: 150px;
`;
