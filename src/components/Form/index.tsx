import React from 'react';
import { Form as AntdForm } from 'antd';
import { FormSchemaNode } from '../../RenderPage/data';

const Form: React.FC<FormSchemaNode> = (props) => {
  console.log(`props`, props);
  const { name } = props;
  return <AntdForm name={name}>form</AntdForm>;
};

export default Form;
