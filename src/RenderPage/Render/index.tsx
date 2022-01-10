import { isString } from 'lodash';
import React, { useMemo } from 'react';
import components from '../../components';
import { tplCompile } from '../../utils';
import { SchemaDataType, SchemaNode, TplNode, SchemaNodeJSon } from '../data';

interface RenderProps {
  node: SchemaNode;
  pData?: SchemaDataType;
}

interface NodeProps {
  node: SchemaNodeJSon;
}
const Node: React.FC<NodeProps> = ({ node }) => {
  const Component = useMemo(() => {
    return components[node.type] as React.LazyExoticComponent<
      React.FC<{
        node: SchemaNode;
      }>
    >;
  }, [node.type]);
  return <Component node={node} />;
};

const Render: React.FC<RenderProps> = (props) => {
  const { node, pData } = props;

  const registerKeys = useMemo(() => Object.keys(components), [components]);

  const data = useMemo(() => {
    if (!isString(node)) {
      return {
        ...pData,
        ...node.data,
      };
    }
    return {
      ...pData,
    };
  }, [node, pData]);

  if (typeof node === 'string') {
    return tplCompile(node, data);
  }

  if (node.type === 'Tpl') {
    return tplCompile((node as TplNode)?.tpl || '', data);
  }

  if (registerKeys.includes(node.type)) {
    return <Node node={{ ...node, data }} />;
  }

  return <>the component is not register</>;
};

export default Render;
