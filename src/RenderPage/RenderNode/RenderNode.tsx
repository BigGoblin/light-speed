import React, { useMemo } from 'react';
import components from '../../components';
import { CustomNodeType, SchemaNodeJSon } from '../data';

interface NodeProps {
  node: SchemaNodeJSon;
}
const RenderNode: React.FC<NodeProps> = ({ node }) => {
  const Component = useMemo(() => {
    return components[node.type] as React.LazyExoticComponent<React.FC<CustomNodeType>>;
  }, [node.type]);

  return <Component body={node.body} data={node.data} />;
};

export default RenderNode;
