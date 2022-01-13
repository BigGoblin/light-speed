import React, { useMemo } from 'react';
import components from '../../components';
import { BasicSchemaNode, ComponentType } from '../data';
import { Form as AntdForm } from 'antd';
import { tplCompile } from '../../utils';

const FormItem = AntdForm.Item;
interface NodeProps {
  node: BasicSchemaNode;
}

/**
 * 根据 type 渲染节点
 * @param param0
 * @returns
 */
const RenderNode: React.FC<NodeProps> = ({ node }) => {
  const Component = useMemo(() => {
    return components[node.type as ComponentType] as React.LazyExoticComponent<
      React.FC<BasicSchemaNode>
    >;
  }, [node.type]);

  if (['Input'].includes(node.type)) {
    // 渲染 formItem 节点
    const formItem = node;
    const { label, name, data } = formItem;
    return (
      <FormItem label={label ? tplCompile(label, data || {}) : undefined} name={name}>
        <Component {...node} />
      </FormItem>
    );
  }

  return <Component {...node} />;
};

export default RenderNode;
