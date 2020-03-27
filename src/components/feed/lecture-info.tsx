import React, { useMemo } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface LectureInfoProps {
  index: number;
  description: string;
  createdAt: string;
  thumbnailUrl: string;
  viewUrl: string;
  length: number;
  commentsCount: number;
}

const LectureInfo: React.FC<LectureInfoProps> = props => {
  const date = useMemo(() => new Date(props.createdAt).toDateString(), [
    props.createdAt
  ]);

  return (
    <Container to={props.viewUrl}>
      <Title>{props.index}. Lecture:</Title>
      <SubTitle>{props.description}</SubTitle>

      <InfoRow>
        <Text>Uploaded: {date}</Text>
        <Text>{props.commentsCount} comments</Text>
      </InfoRow>
      <Thumbnail src={props.thumbnailUrl} alt="Thumbnail for lecture" />
    </Container>
  );
};

export default LectureInfo;

const Container = styled(Link)`
  display: block;
  color: inherit;
  text-decoration: none;
  padding: 8px;
  width: 50%;
  max-width: 500px;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary[300]};
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grays[900]};
  margin: 0 0 4px 0;
`;

const SubTitle = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grays[700]};
  margin: 0 0 4px 0;
`;

const Text = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grays[700]};
`;

const Thumbnail = styled.img`
  width: 100%;
`;
