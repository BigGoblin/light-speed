import React from 'react';
import { CustomNodeType } from '../../RenderPage/data';
import { renderChildren } from '../../utils';

const Page: React.FC<CustomNodeType> = (props) => {
  const { body, data } = props;
  return <div className="page">{renderChildren(body, data)}</div>;
};

export default Page;
