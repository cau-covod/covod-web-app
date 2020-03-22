import React from 'react';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@reach/disclosure';
import styled from 'styled-components';

interface CourseProps {
  name: string;
  description: string;
}

const Course: React.FC<CourseProps> = props => {
  return (
    <Container>
      <Disclosure>
        <Header>
          <Title>{props.name}</Title>
          <Text>{props.description}</Text>
        </Header>
        <ListGrid>{props.children}</ListGrid>
      </Disclosure>
    </Container>
  );
};

export default Course;

const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 4px;
  box-shadow: ${({ theme }) => theme.shadows[100]};
  padding: 8px;
`;

const Header = styled(DisclosureButton)`
  padding: 0;
  background: transparent;
  border: none;
  text-align: left;
  width: 100%;
  cursor: pointer;
`;

const ListGrid = styled(DisclosurePanel)`
  &[data-state='open'] {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 8px;
  }
`;

const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.grays[900]};
  margin: 0 0 4px 0;
`;

const Text = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grays[700]};
`;
