import components from '../components';

type SchemaDataType = Record<string, any>;

type OmitData<T> = Omit<T, 'data'>;
interface BasicSchemaNode {
  key: string;
  type: keyof typeof components | 'Tpl';
  data?: SchemaDataType;
}

interface ContainerSchemaJSon extends BasicSchemaNode {
  body?: SchemaNode | SchemaNode[];
  data?: SchemaDataType;
}

type SchemaNode = TplNode | NodeItemSchemaNode | string;

interface TplNode extends BasicSchemaNode {
  type: 'Tpl';
  tpl?: string;
}

type CustomComponentType<T = unknown> = T & {
  key: string;
  data?: SchemaDataType;
};
interface PageSchemaNode extends ContainerSchemaJSon {
  type: 'Page';
}

type FormSchemaNode = CustomComponentType<{
  type: 'Form';
  body?: FormItemSchemaNode[];
  /** 表单名称 */
  name?: string;
}>;

/** formItem 基础属性 */
interface AsFormItemSchema extends BasicSchemaNode {
  type: keyof typeof components;
  name: string;
  label: string;
}

// form外
type NodeItemSchemaNode = FormSchemaNode | PageSchemaNode;
// form内
type FormItemSchemaNode = AsFormItemSchema | TplNode | string;
