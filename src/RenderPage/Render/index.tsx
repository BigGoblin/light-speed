import { isString } from 'lodash';
import React, { useMemo } from 'react';
import components from '../../components';
import { tplCompile } from '../../utils';
import { SchemaDataType, SchemaNode, TplNode } from '../data';
import RenderNode from '../RenderNode/RenderNode';

interface RenderProps {
  node: SchemaNode;
  pData?: SchemaDataType;
}

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
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: tplCompile(node, data),
        }}
      ></span>
    );
  }

  if (node.type === 'Tpl') {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: tplCompile((node as TplNode)?.tpl || '', data),
        }}
      ></span>
    );
  }

  if (registerKeys.includes(node.type)) {
    return <RenderNode node={{ ...node, data }} />;
  }

  return <>the component is not register</>;
};

export default Render;
