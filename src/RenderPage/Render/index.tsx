import { isEqual, isString } from 'lodash';
import React, { useMemo } from 'react';
import components from '../../components';
import { tplCompile } from '../../utils';
import { SchemaNode, SchemaDataType, TplNode } from '../data';
import RenderNode from '../RenderNode/RenderNode';

interface RenderProps {
  node: SchemaNode;
  pData?: SchemaDataType;
}

const Render: React.FC<RenderProps> = (props) => {
  const { node, pData } = props;

  const registerKeys = useMemo(() => Object.keys(components), [components]);

  // get 作用域
  const data = useMemo(() => {
    if (!isString(node) && !['Form'].includes(node.type)) {
      return {
        ...pData,
        ...node.data,
      };
    }
    return {
      ...pData,
    };
  }, [node, pData]);

  // 渲染模板字符串节点
  if (typeof node === 'string') {
    return (
      <span
        dangerouslySetInnerHTML={{
          __html: tplCompile(node, data),
        }}
      ></span>
    );
  }

  // 渲染 Tpl 节点
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

export default React.memo(Render, isEqual);
