import components from '../components';

type SchemaDataType = Record<string, any>;
interface BasicSchemaNode {
  key: string;
  type: keyof typeof components | 'Tpl';
  data?: SchemaDataType;
}

interface SchemaNodeJSon extends BasicSchemaNode {
  type: keyof typeof components;
  body?: SchemaNode | SchemaNode[];
}

interface TplNode extends BasicSchemaNode {
  type: 'Tpl';
  tpl?: string;
}

type SchemaNode = SchemaNodeJSon | TplNode | string;

interface RootSchemaNode extends SchemaNodeJSon {
  type: 'Page';
}

interface CustomNodeType {
  body?: SchemaNode | SchemaNode[];
  data?: SchemaDataType;
}
