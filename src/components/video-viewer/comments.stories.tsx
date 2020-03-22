import React from 'react';
import faker from 'faker';
import Comments from './comments';
import { id } from '../../test-utils/builders/common';

export default {
  title: 'VideoViewer/Comments',
  component: Comments
};

export const Default = () => {
  var x = [
    {
      id: id(),
      timestamp: 124,
      authorId: id(),
      authorName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      content: "I don't understand",
      replies: [
        {
          id: id(),
          timestamp: 124,
          authorId: id(),
          authorName: `${faker.name.firstName()} ${faker.name.lastName()}`,
          content: 'It means that x is 5/4',
          replies: [
            {
              id: id(),
              timestamp: 124,
              authorId: id(),
              authorName: `${faker.name.firstName()} ${faker.name.lastName()}`,
              content: 'Ahhh, this app is really useful',
              replies: []
            }
          ]
        }
      ]
    }
  ];
  console.log(x);
  return <Comments comments={x} />;
};
