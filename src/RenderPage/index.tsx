import React, { Suspense } from 'react';
import { PageSchemaNode } from './data';
import RenderNode from './RenderNode/RenderNode';

interface RenderPageProps {
  node: PageSchemaNode;
}

const RenderPage: React.FC<RenderPageProps> = ({ node }) => {
  return (
    <Suspense fallback={'loading'}>
      <RenderNode node={node} />
    </Suspense>
  );
};

export default RenderPage;
