import React, { useMemo } from 'react';
import components from '../../components';
import { AsFormItemSchema, CustomComponentType, NodeItemSchemaNode } from '../data';

interface NodeProps {
  node: NodeItemSchemaNode | AsFormItemSchema;
}
const RenderNode: React.FC<NodeProps> = ({ node }) => {
  const Component = useMemo(() => {
    return components[node.type] as React.LazyExoticComponent<React.FC<CustomComponentType>>;
  }, [node.type]);

  return <Component {...node} />;
};

export default RenderNode;
