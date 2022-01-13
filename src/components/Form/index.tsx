import React from 'react';
import { Form as AntdForm } from 'antd';
import { BasicSchemaNode } from '../../RenderPage/data';
import { renderChildren } from '../../utils';

const Form: React.FC<BasicSchemaNode> = (props) => {
  console.log(`props`, props);
  const { name, body, data } = props;
  return <AntdForm name={name}>{body && renderChildren(body, data)}</AntdForm>;
};

export default Form;
