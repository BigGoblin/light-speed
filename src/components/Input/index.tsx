import React from 'react';
import { Input as AntdInput } from 'antd';
import { BasicSchemaNode } from '../../RenderPage/data';

const Input: React.FC<BasicSchemaNode> = (props) => {
  const { compProps } = props;

  return <AntdInput {...compProps} />;
};

export default Input;
