import React from 'react';
import Comments from './comments';
import { buildList } from '../../test-utils/builders/list-builder';
import { commentBuilder } from '../../test-utils/builders/comment-builder';

export default {
  title: 'VideoViewer/Comments',
  component: Comments
};

export const Default = () => {
  var x = buildList(commentBuilder, 2, 10);
  console.log(x);
  return <Comments comments={x} />;
};
