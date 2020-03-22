import React from 'react';
import Comments from './comments';
import { commentBuilder } from '../../test-utils/builders/comment-builder';
import { buildList } from '../../test-utils/builders/list-builder';

export default {
  title: 'VideoViewer/Comments',
  component: Comments
};

const x = buildList(commentBuilder);
export const Default = () => {
  return <Comments comments={x} />;
};
