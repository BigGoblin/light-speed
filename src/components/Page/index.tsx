import React from 'react';
import { CustomComponentType, PageSchemaNode } from '../../RenderPage/data';
import { renderChildren } from '../../utils';

const Page: React.FC<CustomComponentType<PageSchemaNode>> = (props) => {
  const { body, data } = props;
  return <div className="page">{renderChildren(body, data)}</div>;
};

export default Page;
