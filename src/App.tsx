import React from 'react';
import RenderPage from './RenderPage';
import { RootSchemaNode } from './RenderPage/data';

const testSchema: RootSchemaNode = {
  key: 'root',
  type: 'Page',
  data: {
    name: 'Jack',
    age: 16,
  },
  children: [
    'I am ${name}, ${age} years old!',
    '666',
    {
      key: 'test-tpl',
      type: 'Tpl',
      tpl: 'I am ${name}, ${age} years old, come from ${country}',
      data: {
        name: '张三',
        country: 'China',
      },
    },
  ],
};

const App: React.FC = () => {
  return (
    <div>
      <RenderPage node={testSchema} />
    </div>
  );
};

export default App;
