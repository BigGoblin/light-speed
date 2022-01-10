import React, { Suspense, useMemo } from 'react';
import components from '../components';
import { RootSchemaNode } from './data';

interface RenderPageProps {
  node: RootSchemaNode;
}

const RenderPage: React.FC<RenderPageProps> = ({ node }) => {
  const Component = useMemo(() => components[node.type], [node.type]);

  return (
    <Suspense fallback={'loading'}>
      <Component node={node} />
    </Suspense>
  );
};

export default RenderPage;
