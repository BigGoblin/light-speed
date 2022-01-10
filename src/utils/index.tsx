import React from 'react';
import { isArray, isString, template } from 'lodash';
import Render from '../RenderPage/Render';
import { SchemaDataType, SchemaNodeJSon } from '../RenderPage/data';

// 缓存一下提升性能
const EVAL_CACHE: { [key: string]: Function } = {};

export function tplCompile(str: string, data: SchemaDataType) {
  try {
    const fn = EVAL_CACHE[str] || (EVAL_CACHE[str] = template(str));
    return fn.call(data, data);
  } catch (e) {
    return `<span class="text-danger">${e.message}</span>`;
  }
}

export function renderChildren(children: SchemaNodeJSon['children'], pData?: SchemaDataType) {
  return isArray(children) ? (
    <>
      {children.map((child, index) => (
        <Render
          key={isString(child) ? `${child}${index}` : child.key}
          node={child}
          pData={pData}
        ></Render>
      ))}
    </>
  ) : (
    children && <Render node={children} pData={pData}></Render>
  );
}