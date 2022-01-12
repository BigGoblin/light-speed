import React from 'react';
import { isArray, isString, template } from 'lodash';
import Render from '../RenderPage/Render';
import { SchemaDataType, ContainerSchemaJSon } from '../RenderPage/data';

// 缓存一下提升性能
const EVAL_CACHE: { [key: string]: Function } = {};

export function tplCompile(str: string, data: SchemaDataType) {
  try {
    const fn = EVAL_CACHE[str] || (EVAL_CACHE[str] = template(str, {}));
    return fn.call(data, data);
  } catch (e) {
    return `<span class="text-danger">${e.message}</span>`;
  }
}

export function renderChildren(content: ContainerSchemaJSon['body'], pData?: SchemaDataType) {
  return isArray(content) ? (
    <>
      {content.map((child, index) => (
        <Render key={isString(child) ? `${child}${index}` : child.key} node={child} pData={pData} />
      ))}
    </>
  ) : (
    content && <Render node={content} pData={pData} />
  );
}

/** 是否为可Parse字符串 */
export const isJsonString = (str: string) => {
  try {
    if (isString(str) && typeof JSON.parse(str) === 'object') {
      return true;
    }
  } catch (e) {
    return false;
  }
  return false;
};
