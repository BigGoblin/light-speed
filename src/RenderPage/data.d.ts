import components from '../components';

type SchemaDataType = Record<string, any>;

type OmitData<T> = Omit<T, 'data'>;

type ComponentType = keyof typeof components;

interface BasicSchemaNode {
  key: string;
  type: ComponentType | 'Tpl';
  data?: SchemaDataType;
  body?: SchemaNode | SchemaNode[];

  compProps?: Record<string, any>;

  // formItem
  name?: string;
  label?: string;
}

type SchemaNode = TplNode | BasicSchemaNode | string;

interface TplNode extends BasicSchemaNode {
  type: 'Tpl';
  tpl?: string;
}
