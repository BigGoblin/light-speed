import React, { Suspense } from 'react';
import { RootSchemaNode } from './data';
import RenderNode from './RenderNode/RenderNode';

interface RenderPageProps {
  node: RootSchemaNode;
}

const RenderPage: React.FC<RenderPageProps> = ({ node }) => {
  return (
    <Suspense fallback={'loading'}>
      <RenderNode node={node} />
    </Suspense>
  );
};

export default RenderPage;
