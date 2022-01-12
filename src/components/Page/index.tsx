import React from 'react';
import { PageSchemaNode } from '../../RenderPage/data';
import { renderChildren } from '../../utils';

const Page: React.FC<PageSchemaNode> = (props) => {
  const { body, data } = props;
  return <div className="page">{renderChildren(body, data)}</div>;
};

export default Page;
