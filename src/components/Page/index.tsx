import React from 'react';
import { RootSchemaNode } from '../../RenderPage/data';
import { renderChildren } from '../../utils';

const Page: React.FC<{
  node: RootSchemaNode;
}> = (props) => {
  const { node } = props;
  return <div className="page">{renderChildren(node.children, node.data)}</div>;
};

export default Page;
