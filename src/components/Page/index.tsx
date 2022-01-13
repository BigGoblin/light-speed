import React from 'react';
import { BasicSchemaNode } from '../../RenderPage/data';
import { renderChildren } from '../../utils';

const Page: React.FC<BasicSchemaNode> = (props) => {
  const { body, data } = props;
  return <div className="page">{renderChildren(body, data)}</div>;
};

export default Page;
